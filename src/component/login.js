import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showHide: true,
            data: {
                email: '',
                pass: ''
            }
        }
    }

    set_value = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <Modal show={true} >
                    <Modal.Header closeButton onClick={this.props.handle}>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><br />
                        <input id="inputEmail" type="email" name="email" placeholder="Email address" required="" onChange={(e) => this.set_value(e)} autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4 my-3  text-primary bg-dark w-20" /> <br />
                        <input id="inputPassword" type="password" name="pass" placeholder="Password" required="" onChange={(e) => this.set_value(e)} className="form-control rounded-pill border-0 shadow-sm px-4  text-primary bg-dark" />
                        <br /><br />
                        <div className="center">
                            <Button variant="primary" className="px-5" onClick={() => { this.props.save(this.state.data) }}>Login</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="">
                            <Button variant="secondary" onClick={this.props.fb_login}>Facebook Login</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Login;