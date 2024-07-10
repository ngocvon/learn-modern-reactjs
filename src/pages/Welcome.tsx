import Card from "../components/Card.tsx";
import React, { useEffect, useState,useRef ,useMemo} from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import ButtonField from "../components/ButtonField.tsx";
import { People } from "models/people.model";
import TextField from "../components/TextField.tsx";
import {useLocation} from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Welcome({ filterAndSet, filter }) {
    const {pathname} = useLocation();
    const [people, setPeople] = useState<People[]>([]);
    const [loading, setLoading] = useState(true);
    console.log('people',people);
    setTimeout(() => {
        if (loading) {
            setLoading(false);
        }
    }, 700);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState<number>(0);
    useEffect(() => {
        fetch(`/public/data.json?page=${page}&search=${searchText}`).then(res => res.json())
            .then((response) => {
                setIsLoading(false);
                if(!searchText){
                    setPeople([...people, ...response]);
                }else {
                    setPeople([...people, ...response]);
                }
            }).catch((err) => console.error(err))
    }, [page])

    //
    const [searchText, setSearchText] = useState<string>('');
    const searchRef = useRef<any>(null);// dont know what is typeof
    const handleShowMore = () => {
        setIsLoading(true);
        setPage(page + 1);
    }
    const handleSearchText = (value: string) => {
       clearTimeout(searchRef.current!);
       searchRef.current= setTimeout(()=>{
           setSearchText(value);
       },1000);
    }
    const searchValues = useMemo(()=>{
        return people.filter(item=>item.name?.toUpperCase().indexOf(searchText.toUpperCase())!==-1);

    },[searchText,page]);

    return (
        <>
            <div className="wrapper">
                <div className="innerWrapper">
                    <h1>Photo Cards:{pathname}</h1>
                    <TextField placeholder="Enter Search!" width="250px" onChange={handleSearchText}/>
                    {loading && (
                        <div className='loadding'>
                            <CirclesWithBar
                                height='50'
                                width='50'
                                color='#4fa94d'
                                wrapperStyle={{}}
                                wrapperClass=''
                                visible={true}
                                outerCircleColor=''
                                innerCircleColor=''
                                barColor=''
                                ariaLabel='circles-with-bar-loading'
                            />
                        </div>
                    )}

                    {!loading && <Card data={searchText ? searchValues : people || [].filter(i => {
                        let { image , alt} = i
                        const filterLookUp = [image, alt, ...name]
                        return filterLookUp;
                    })} filterAndSet={filterAndSet} />}

                    {!loading && <ButtonField loading={isLoading} onClick={handleShowMore}>Show more</ButtonField>}

                </div>
            </div>
        </>

    );
}