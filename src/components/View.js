import React from 'react'

export const View = ({books}) => {
    
    return books.map(book=>(
        
        <tr key={book.rollno}>
            <td>{book.rollno}</td>
            <td>{book.name}</td>
            <td>{book.sex}</td>
        </tr>            
    
))
}