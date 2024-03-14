import React from 'react'

function AboutSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5' style={{boxShadow:'1px 1px 15px #111'}}>
            <h3 className='text-center bold'>ABOUT ME</h3>
            <div className='container text-justify pt-4'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='about-wrapper p-4'>
                            <p>I am a backend developer with expertise in Laravel. I have experience in building scalable, secure and reliable web application using various framework and technology. I enjoy solving complex problem and learning new skills.</p>
                            <p>I am passionate about creating high quality code that follow best practice and industry standards. I always looking for new challenges and opportunities to grow as a developer.</p>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection
