import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6">Reviews - Todos os direitos reservados</div>
                    <div className="col-6 text-right">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;