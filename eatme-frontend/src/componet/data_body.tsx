import React from 'react';
import '../css/04c37210497aac10.css';
import '../css/61fb21940d112210.css';
import '../css/bf01bab48ae4d830.css';
import '../css/cd6babac7868d364.css';
import '../css/cf9db88619ada1df.css';
import '../css/consumer-component-library.css';
import Cart from './cart';
import DataListLayout from './list_layout';

function DataBody(){
    return(
        <div id='menu-layout-container' className="MenuLayouts-fb711d07abb4cdbb">
            <div className="ccl-4e3e3ba79c3ddfd4 ccl-197d866ec17e7baf ccl-7fa120cc2d2c216b">
                <div className="ccl-4e3e3ba79c3ddfd4 ccl-ee1b33848dc80738 ccl-7fa120cc2d2c216b">
                    <div className="MenuLayouts-07b01454e450979a MenuLayouts-a3176183fb67cdbd">
                        <DataListLayout/>
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataBody;