import React from 'react'
import './footer.css';

function footer() {
    return (
            <footer>
                <div className="footer-top-line">
                    <h3>The platform was built during the Tinkerhub Build From Home 2021</h3>
                    
                </div>
                <div>
                    <h3>Made by : </h3>
                </div>
                <div className="creator-tiles">
                        <div className="creator creator-1">
                            <a href="https://github.com/kimi0zx" target="_blank" ><h3>Abishek C</h3></a>
                            <h4>Backend-dev</h4>
                        </div>
                        <div className="creator creator-2">
                            <a href="https://github.com/Ambroz363/" target="_blank" ><h3>Akshay</h3></a>
                            <h4>Frontend-dev</h4>
                        </div>
                        <div className="creator creator-3">
                            <a href="https://github.com/CaltSenpai" target="_blank" ><h3>Calton John</h3></a>
                            <h4>UI-UX</h4>
                        </div>
                    </div>     
                
            </footer>
    )
}

export default footer