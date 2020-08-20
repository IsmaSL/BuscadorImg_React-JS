import React from 'react';

function Pie() {
    return(
        <footer className="page-footer font-small bg-dark text-white pt-4">
            <div className="container">
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-0">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                        <a href="example.com" className="btn btn-success esq px-3">Sign up!</a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3 text-white bg-black">© 2020 Copyright:
                <a className="text-white" href="https://github.com/IsmaSL"> IsmaSL</a>
            </div>
        </footer>
    )
}

export default Pie;