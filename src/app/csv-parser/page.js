"use client"

import { React, useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
const Content = () => {

    const acceptableCSVFileTypes = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";

    const [files, setFiles] = useState(null)
    const [parsed, setParsed] = useState([]);
    const [upload, setUpload] = useState(false);
    const inputRef = useRef(null)
    let csvFile = null
    

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    }

    const handleUpload = () => {
        if (files) {
            csvFile = files[0]
        }
        Papa.parse(csvFile, {
            complete: function(results) {
                console.log("Finished:", results.data);
                setParsed(results.data);
                setUpload(true);
            }
        });
    } 
    
    const [selectedValues, setSelectedValues] = useState({});
    const dropdownColumnIndex = 3; // Index (0-based) of the column to be displayed as dropdown

    const handleDropdownChange = (rowIndex, value) => {
        setSelectedValues((prevSelectedValues) => {
          const updatedSelectedValues = { ...prevSelectedValues };
          updatedSelectedValues[rowIndex] = updatedSelectedValues[rowIndex] || [];
          updatedSelectedValues[rowIndex] = updatedSelectedValues[rowIndex].concat(value.split(',').map((tag) => tag.trim()));
          return updatedSelectedValues;
        });
      };
      
      const handleRemoveTag = (rowIndex, tagIndex) => {
        setSelectedValues((prevSelectedValues) => {
          const updatedSelectedValues = { ...prevSelectedValues };
          if (updatedSelectedValues[rowIndex]) {
            updatedSelectedValues[rowIndex].splice(tagIndex, 1);
            if (updatedSelectedValues[rowIndex].length === 0) {
              delete updatedSelectedValues[rowIndex];
            }
          }
          return updatedSelectedValues;
        });
      };

      useEffect(() => {
        // Extract unique values from the fourth column for dropdown and tags
        if (Array.isArray(parsed) && parsed.length > 1) {
          const dropdownOptions = Array.from(
            new Set(
              parsed
                .slice(1)
                .flatMap((row) => row[dropdownColumnIndex].split(',').map((value) => value.trim()))
            )
          );
      
          setSelectedValues((prevSelectedValues) => {
            // Filter out any selected values that are not in the dropdownOptions
            const updatedSelectedValues = {};
            Object.keys(prevSelectedValues).forEach((key) => {
              updatedSelectedValues[key] = prevSelectedValues[key].filter((value) =>
                dropdownOptions.includes(value)
              );
              if (updatedSelectedValues[key].length > 0) {
                // Only add to updatedSelectedValues if there are selected values
                updatedSelectedValues[key] = prevSelectedValues[key];
              }
            });
            return updatedSelectedValues;
          });
        }
      }, [parsed, dropdownColumnIndex]);

    return (
        <main className="bg-[#F8FAFF]">
            <div className="lg:flex lg:min-h-screen">
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:flex lg:flex-col lg:w-1/6 w-full  bg-white">
                
                <div className="flex flex-row justify-center p-4 pb-12">
                    <div className="top-0 left-0 p-3">
                        <img src="/Subtract.svg" alt="Logo1" />
                    </div>
                    <p className="font-montserrat pt-5 font-bold text-black text-xl">Base</p>
                </div>

                <div className="">
                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 hover:bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/category.svg"
                                alt="Dashboard"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-gray-600 hover:text-regal-blue">
                                Dashboard
                            </p>
                    </div>
                </a>
                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/chart.svg"
                                alt="Upload"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-regal-blue">
                                Upload
                            </p>
                    </div>
                </a>

                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 hover:bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/Ticket.svg"
                                alt="Invoice"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-gray-600 hover:text-regal-blue">
                                Invoice
                            </p>
                    </div>
                </a>

                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 hover:bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/Document.svg"
                                alt="Calendar"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-gray-600 hover:text-regal-blue">
                                Schedule
                            </p>
                    </div>
                </a>

                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 hover:bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/Calendar.svg"
                                alt="Calendar"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-gray-600 hover:text-regal-blue">
                                Calendar
                            </p>
                    </div>
                </a>

                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 hover:bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/Notification.svg"
                                alt="Notifications"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-gray-600 hover:text-regal-blue">
                                Notifications
                            </p>
                    </div>
                </a>

                <a href="#" className="">    
                    <div className="flex flex-row justify-evenly items-center mb-6 py-2 hover:bg-gradient-to-r from-regal-blue-light">        
                            <img
                                src="/Setting.svg"
                                alt="Settings"
                                className="w-8 h-8"
                            />
                            <p className="font-montserrat text-gray-600 hover:text-regal-blue">
                                Settings
                            </p>
                    </div>
                </a>

                </div>
            </div>
    
            {/* Right Content Area */}
            <div className='flex flex-col lg:w-5/6 items-center bg-[#F8FAFF]'>
                <div className="w-full p-8 bg-white">
                    <div className="flex justify-between items-center bg-white">
                        <p className="hidden lg:block font-montserrat text-xl font-bold text-black">Upload CSV</p>
                        <div className='flex flex-row'>
                            <div className="lg:hidden flex flex-row justify-center">
                                <div className="top-0 left-0 p-3">
                                    <img src="/Subtract.svg" alt="Logo1" />
                                </div>
                                <p className="font-montserrat lg:pt-5 pt-4 font-bold text-black text-xl">Base</p>
                            </div>
                            
                            <div className="flex flex-row-reverse lg:ml-24 ml-44 mt-4">
                                <img
                                    src="/image 1.png"
                                    alt="Profile Picture"
                                    className="w-7 h-7 rounded-full ml-5"
                                />
                                <span className="text-gray-600 pt-1">
                                    <img src="Vector.svg" alt="Notification Icon" />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='lg:hidden w-full p-7 m-5'>
                    <p className="lg:hidden font-montserrat text-xl font-bold text-black">Upload CSV</p>
                </div>

                <div className='flex flex-col justify-center items-center box-border rounded-lg bg-white lg:w-6/12 lg:h-96 lg:mt-16'>
                    <div 
                        className='box-border border-2 border-dotted border-gray-500 w-5/6 h-3/5 lg:p-16 py-16 text-center rounded-lg'
                        onDragEnter={handleDragOver}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        >
                        <img
                            src="/MOE1.svg"
                            alt="Profile Picture"
                            className="lg:pl-48 pl-28"
                        />

                        {!files ? 
                        <p className="hidden lg:block text-sm font-light text-gray-500 pt-3 text-center">
                            <input
                                type='file'
                                onChange={(event) => setFiles(event.target.files)}
                                hidden
                                ref={inputRef}
                                accept={acceptableCSVFileTypes}
                            />
                            Drop your excel sheet here or <a onClick={() => inputRef.current.click()} className="font-medium text-blue-400 hover:underline">Browse</a>
                        </p> :
                        <div className='hidden lg:block text-center'>
                            <p className="text-sm font-light text-gray-500 pt-3 text-center">
                                {files[0].name}
                            </p>
                            <a onClick={() => setFiles(null) && setParsed(null) && setUpload(false)} className="text-sm font-medium text-red-400 hover:underline">Remove</a>
                        </div>
                        }

                        {!files ? 
                            <p className="lg:hidden text-sm font-light text-gray-500 pt-3 text-center">
                                <input
                                    type='file'
                                    onChange={(event) => setFiles(event.target.files)}
                                    hidden
                                    ref={inputRef}
                                />
                                Drop your excel sheet <a onClick={() => inputRef.current.click()} className="font-medium text-blue-400 hover:underline">here</a>
                            </p> :
                            <div className='lg:hidden text-center'>
                                <p className="text-sm font-light text-gray-500 pt-3 text-center">
                                    {files[0].name}
                                </p>
                                <a onClick={() => setFiles(null) && setParsed(null) && setUpload(false)} className="lg:text-sm font-medium text-red-400 hover:underline">Remove</a>
                            </div>
                        }


                    </div>
                    <div className='pt-4'>
                        <button onClick={handleUpload} disabled={!files || upload} className='bg-regal-blue w-80 rounded-md p-2 text-white disabled:bg-regal-blue-light'>
                            <img className="inline mr-2 mb-1"  src='/upload.svg' alt='Upload'/>
                            Upload
                        </button>
                    </div>
                </div>

                <div className='w-full'>
                {Array.isArray(parsed) && parsed.length > 0 && (
                    <p className='lg:text-3xl text-xl font-montserrat text-black font-bold p-5 m-10 '>Uploads</p>
                )}
                </div>

                <div className='font-montserrat'>
                    {Array.isArray(parsed) && parsed.length > 0 && (
                        <div className='text-black lg:p-10'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-md text-left rtl:text-right text-gray-500 bg-light-gray-200 border-separate border-spacing-4 border">
                                <thead className="text-sm text-gray-700 camelCase bg-light-gray-200">
                                    <tr>
                                        
                                        <th className="px-6 py-3">
                                            Sl No.
                                        </th>

                                        <th className="px-6 py-3">
                                            Links 
                                        </th>

                                        <th className="px-6 py-3">
                                            Prefix
                                        </th>

                                        <th className="px-6 py-3">
                                            Add Tags
                                        </th>

                                        <th className="px-6 py-3">
                                            Selected Tags
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='border border-separate border-spacing-8'>
                                {/* Display data rows */}
                                    {Array.isArray(parsed) &&
                                    parsed.slice(1).map((row, rowIndex) => (
                                        <tr key={rowIndex} className="bg-white rounded-lg">
                                            {row.map((cell, cellIndex) => (
                                            
                                                <td key={cellIndex} className="px-4 py-2 border rounded-lg">
                                                    {cellIndex === dropdownColumnIndex ? (
                                                        <div className="flex items-left">
                                                            <select
                                                                value={selectedValues[rowIndex] || ''}
                                                                onChange={(e) =>
                                                                    handleDropdownChange(rowIndex, e.target.value)
                                                                }
                                                                className="w-full mb-2 px-3 py-3 rounded-lg box-content"
                                                            >
                                                                {/* Populate dropdown options with unique values from the fourth column */}
                                                                
                                                                <option value="">Select Tags</option>
                                                                {cell.split(',').map((value, index) => (
                                                                    
                                                                    <option key={index} value={value.trim()} className='py-2 box-content'>
                                                                        {value.trim()}
                                                                    </option>
                                                                    
                                                                ))}
                                                                
                                                            </select>
                                                        </div>

                                                    ) : cellIndex === 1 ? (
                                                        // "Links" column, render as hyperlinks
                                                        <a className="text-blue-400 underline hover:bg-blue-100" href={cell} target="_blank" rel="noopener noreferrer">
                                                            {cell}
                                                        </a>

                                                    ) : cellIndex === dropdownColumnIndex + 1 ? (
                                                        <div>
                                                            {selectedValues[rowIndex] && (
                                                                <div className="flex flex-wrap">
                                                                    {selectedValues[rowIndex].map((tag, tagIndex) => (
                                                                    <div
                                                                        key={tagIndex}
                                                                        className="bg-regal-blue rounded-md px-3 py-1 mr-2 mb-2 flex items-center"
                                                                    >
                                                                        <span className="mr-1 text-white text-xs">{[tag.trim()]}</span>
                                                                        <button
                                                                        onClick={() => handleRemoveTag(rowIndex, tagIndex)}
                                                                        className="text-white cursor-pointer"
                                                                        >
                                                                        x
                                                                        </button>
                                                                    </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        cell
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}
                </div>            
            </div>                          
        </div>
      </main>
    );
    }

export default Content