import React from 'react'
import CustomButton from './CustomButton';

const FilePicker = ({ file,setFile, readFile}) => {
  return (
    <div className='filepicker-container '>
      <div className="flex flex-1 flex-col">
        <input 
          id="file-upload"
          type="file"
          accept='image/*'
          onClick={(e) => {setFile(e.target.file[0])}}
        
        />
        <lable htmlFor="file-upload" className="filepicker-lable">
          Upload File
        </lable>
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file === '' ? "No File Selected": file.name}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3 '>
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles ="text-xs"


        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles ="text-xs"


        />
      </div>
    </div>
  )
}

export default FilePicker
