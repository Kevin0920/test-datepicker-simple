import React from 'react';
import Table from 'react-bootstrap/Table';
import moment from 'moment';


const TodoTable = ({items}) => {
    // console.log(items);

    const dataDetail = items.map((data, id) => {
        console.log(data);
        return (
                <tr key={id}>
                    <td>{data.id}</td>
                    <td>{data.text}</td>
                    <td> {
                        moment(data.selectedDate).format('LLLL')
                        }
                    </td>
                </tr>
            )
        });

    return (
        <div style={{"marginTop": "10px"}} className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Text Message</th>
                        <th>Selected Date</th>
                    </tr>
                </thead>
                <tbody>
                    {dataDetail}
                </tbody>
            </Table>
        </div>
    )
};

export default TodoTable;