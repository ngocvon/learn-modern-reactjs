import React, {useContext} from 'react';
import {AppContext} from "../Context/AppContext.tsx";

export default function Content() {
    const {isOpen,themeStyle}=useContext(AppContext);

  return (
      <div
          className='content'
          style={{
            ...themeStyle,
            padding: '10px',
            gridColumn: isOpen ? '2 / 4' : '1 /4',
          }}
      >
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
          libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
          eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
          consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
          sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
          libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
          eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
          consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
          sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
          libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
          eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
          consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
          sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
          libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
          eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
          consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
          sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
          libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
          eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
          consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
          sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
        </p>
        <br/>
      </div>
  );
}
