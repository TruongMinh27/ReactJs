import React, { useState } from 'react'

export default function TextForm(props) {

    const [text ,setText] = useState('Nhập chữ vào đây')
    const upperCase = ()=> {
      let newText = text.toUpperCase()
      setText(newText);
    }
    const handleChanged = (e) => {
        console.log('changed');
       setText(e.target.value)
    }
    const lowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const sentenceCase = () => {
     
     let temp = text.split('.');
     for(let i in temp){
        temp[i]=temp[i].trim()
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substr(1).toLowerCase();
     }
     let newText = temp.join('. ');
     setText(newText)
    }
    
    const deteleAll = () => {
        setText('')
    }
       
    return (
        <>
            <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.textFormHeading}</h1>
            <div className="mb-3 ">
                <label htmlFor="myText" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Đếm chữ</label>
                <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode}`} onChange={handleChanged} value={text} id="myText" rows="8"></textarea>
                <br />
                <button className="btn btn-primary mx-1 my-1" onClick={upperCase}>In Hoa</button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowerCase}>In Thường</button>
                <button className="btn btn-primary mx-1 my-1" onClick={sentenceCase} >Viết Hoa Đầu Câu</button>

                <button className="btn btn-primary mx-1 my-1" onClick={deteleAll}>Xóa Hết</button>
            </div>
            <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
                <h2 className='my-3'>Số chữ nhập vào</h2>
                <p>Số từ bạn nhập là {text.split(" ").length} và số ký tự bạn nhập là {text.length}</p>
            </div>
        </>
    )
}