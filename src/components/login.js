import { Button, TextField } from '@material-ui/core';
import React from 'react';


const Login = () => {
    return (
        <div align='center'>
            <h2>Register Employee</h2>
            <table>
                <tr>
                    <td>
                        <p>Name</p>
                    </td>
                    <td>
                        <TextField type="text" variant="outlined" label='Name' helperText='Enter your name' required={true}></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Address</p>
                    </td>
                    <td>
                        <TextField type="text" variant="outlined" label='Address' helperText='Enter your full address'></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Pincode</p>
                    </td>
                    <td>
                        <TextField type="number" variant="outlined" label='Pincode' maxlength={6} required={true}></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Mobile Number</p>
                    </td>
                    <td>
                        <TextField type="number" variant="outlined" label='Mobile Number' maxlength={10} required={true}></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Email-Id</p>
                    </td>
                    <td>
                        <TextField type="email" variant="outlined" label='Email-id' helperText='Enter valid email id'></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Date of Birth</p>
                    </td>
                    <td>
                        <TextField type="date" variant="outlined"></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Username</p>
                    </td>
                    <td>
                        <TextField type="text" variant="outlined" label='Username'></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Password</p>
                    </td>
                    <td>
                        <TextField type="password" variant="outlined" label='password'></TextField>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Confirm Password</p>
                    </td>
                    <td>
                        <TextField type="password" variant="outlined" label='Confirm Password'></TextField>
                    </td>
                </tr>
            </table>
            <Button variant='contained' color='primary'>Submit</Button>
        </div>
    )
}
export default Login
