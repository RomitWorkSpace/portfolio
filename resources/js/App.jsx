import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './common/Layout';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../assets/vendor/aos/aos.css'
import '../assets/css/main.css'

import '../css/app.css'


if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(
        <BrowserRouter>
        <Layout />
        </BrowserRouter>
    );
}