import React, {useState, useRef} from 'react'
// import styles
import styles from './import.module.scss'


const Import = () => {
  // error message
  const [createdFileError, setCreatedFileError] = useState('');
 
  const fileInputRef = useRef(null); // Создаем ссылку на элемент input

  const [fileTable, setFileTable] = useState([]);

  // сохранение файла
  const [createdFile, setCreatedFile] = useState('');

  const createdFileValue = (event) => {
    setCreatedFile(event.target.files[0])
    setCreatedFileError('');
  }


  const createFileList = () =>{
    if(createdFile){
      const newFile = createdFile;
      setFileTable([...fileTable, newFile.name]);
      setCreatedFile('');

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }else{
      setCreatedFileError('Please choise a file');
    }
  }

  return (
    <>  
      <div className={styles.importBlock}>
        <div className={styles.fileTransfer}>

        </div>

        <div className={styles.importBtnBlock}>
          <input 
            ref={fileInputRef} // Присваиваем ссылку на input
            type='file'
            onChange={createdFileValue}></input>
            <h4>{createdFileError}</h4>
          <button 
          onClick={createFileList}
          className={styles.importBtn}>Загрузить</button>
        </div>
        
      </div>

      <table>
        <tr>
          <th>Загруженный файл</th>
        </tr>

        <tbody>
          {fileTable.map((fileTableName, fileTableIndex) =>(
            <tr key={fileTableIndex}>
              <td>{fileTableName}</td>
            </tr>
          ))}
            
        </tbody>
      </table>

    </>
  );

}

export default Import
