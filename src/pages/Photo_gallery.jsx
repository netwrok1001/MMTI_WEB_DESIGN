import './Photo_gallery.css';

export default function PhotoGallery() {
    // Gallery items from photo_gallery folder
    const galleryItems = [
        { id: 1, title: 'Capt. C. L. Dubey B.Sc., Extra Master, Principal & Owner of Mumbai Maritime Training Institute (MMTI), Mumbai and Fellow and Warden of The Company of Master Mariners of India (CMMI), a professional body representing Master Mariners with the purpose of developing and promoting the traditions and standards of the Merchant Navy in India, at its monthly lecture meeting on Thursday, 23rd March held at the Mumbai Maritime Training Institute (MMTI), presented a report on the IMO HTW9 Committee meeting recently held in London from 6 to 10 February 2023.', image: './photo_gallery/img12012.jpeg' },
        { id: 2, title: '..', image: './photo_gallery/img12041.jpeg' },
        { id: 3, title: '..', image: './photo_gallery/MMTI - CMMI meeting 01Sep17.jpg' },
        { id: 4, title: '..', image: './photo_gallery/MMTI - Lifeboat Training.jpg' },
        { id: 5, title: '..', image: './photo_gallery/MMTI 2018 Award - Post-Sea Competency Courses.jpg' },
        { id: 6, title: '..', image: './photo_gallery/MMTI Khopoli Swimming Pool.jpg' },
        { id: 7, title: '..', image: './photo_gallery/MMTI2015AwardSTCWModularCourses.jpg' },
        { id: 8, title: '..', image: './photo_gallery/MMTI2021.jpeg' },
        { id: 9, title: '""', image: './photo_gallery/NMDC_SAGAR1.jpeg' },
        { id: 10, title: 'MUMBAI MARITIME TRAINING INSTITUTE awarded as 2nd Rank of "Recognition of Outstanding Maritime Training Institute", in the category of Post Sea Training Institute in conducting Competency Courses on the occasion of 60th National Maritime Day Celebrations 2023 i.e. on 05.04.2023 by D.G.Shipping, Govt. of India...', image: './photo_gallery/NMDC_SAGAR2.jpg' },
        { id: 11, title: 'OFFING awarded " BEST INSTITUTE for STCW Courses " - Year 2016..', image: './photo_gallery/p1.png' },
        { id: 12, title: 'Capt.C.L.Dubey awarded by NMDSC for his " Outstanding contribution in Maritime Education & Training ". - Year 2017..', image: './photo_gallery/p2.png' },
        { id: 13, title: 'OFFING awarded " BEST INSTITUTE for Competency Courses ". - Year 2018..', image: './photo_gallery/p3.png' },
        { id: 14, title: 'Capt.C.L.Dubey awarded " Honouring The Author of Maritime Text Books " . - Year 2019..', image: './photo_gallery/p4.png' },
        { id: 15, title: '..', image: './photo_gallery/SimulatorRoom2.jpg' },
        { id: 16, title: '..', image: './photo_gallery/SimulatorRoom4.jpg' },
        { id: 17, title: '..', image: './photo_gallery/SimulatorRoom9.jpg' },
    ];

    // Adjust caption font-size based on text length so long captions fit
    const getCaptionFontSize = (text) => {
        const len = text ? text.length : 0;
        if (len <= 30) return '1.05rem';
        if (len <= 60) return '0.95rem';
        if (len <= 100) return '0.85rem';
        return '0.75rem';
    };

    return (
        <section className="photo-gallery">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1 className="gallery-title">Photo Gallery</h1>
                    <div className="gallery-accent"></div>
                    <p className="gallery-subtitle">
                        Explore moments from our maritime training institute
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="gallery-image"
                            />
                            <div className="gallery-overlay">
                                <div
                                    className="overlay-text"
                                    style={{ fontSize: getCaptionFontSize(item.title) }}
                                >
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

             
            </div>
        </section>
    );
}

import './Photo_gallery.css';

export default function PhotoGallery() {
    // Gallery items from photo_gallery folder
    const galleryItems = [
        { id: 1, title: 'Capt. C. L. Dubey B.Sc., Extra Master, Principal & Owner of Mumbai Maritime Training Institute (MMTI), Mumbai and Fellow and Warden of The Company of Master Mariners of India (CMMI), a professional body representing Master Mariners with the purpose of developing and promoting the traditions and standards of the Merchant Navy in India, at its monthly lecture meeting on Thursday, 23rd March held at the Mumbai Maritime Training Institute (MMTI), presented a report on the IMO HTW9 Committee meeting recently held in London from 6 to 10 February 2023.', image: './photo_gallery/img12012.jpeg' },
        { id: 2, title: '..', image: './photo_gallery/img12041.jpeg' },
        { id: 3, title: '..', image: './photo_gallery/MMTI - CMMI meeting 01Sep17.jpg' },
        { id: 4, title: '..', image: './photo_gallery/MMTI - Lifeboat Training.jpg' },
        { id: 5, title: '..', image: './photo_gallery/MMTI 2018 Award - Post-Sea Competency Courses.jpg' },
        { id: 6, title: '..', image: './photo_gallery/MMTI Khopoli Swimming Pool.jpg' },
        { id: 7, title: '..', image: './photo_gallery/MMTI2015AwardSTCWModularCourses.jpg' },
        { id: 8, title: '..', image: './photo_gallery/MMTI2021.jpeg' },
        { id: 9, title: '""', image: './photo_gallery/NMDC_SAGAR1.jpeg' },
        { id: 10, title: 'MUMBAI MARITIME TRAINING INSTITUTE awarded as 2nd Rank of "Recognition of Outstanding Maritime Training Institute", in the category of Post Sea Training Institute in conducting Competency Courses on the occasion of 60th National Maritime Day Celebrations 2023 i.e. on 05.04.2023 by D.G.Shipping, Govt. of India...', image: './photo_gallery/NMDC_SAGAR2.jpg' },
        { id: 11, title: 'OFFING awarded " BEST INSTITUTE for STCW Courses " - Year 2016..', image: './photo_gallery/p1.png' },
        { id: 12, title: 'Capt.C.L.Dubey awarded by NMDSC for his " Outstanding contribution in Maritime Education & Training ". - Year 2017..', image: './photo_gallery/p2.png' },
        { id: 13, title: 'OFFING awarded " BEST INSTITUTE for Competency Courses ". - Year 2018..', image: './photo_gallery/p3.png' },
        { id: 14, title: 'Capt.C.L.Dubey awarded " Honouring The Author of Maritime Text Books " . - Year 2019..', image: './photo_gallery/p4.png' },
        { id: 15, title: '..', image: './photo_gallery/SimulatorRoom2.jpg' },
        { id: 16, title: '..', image: './photo_gallery/SimulatorRoom4.jpg' },
        { id: 17, title: '..', image: './photo_gallery/SimulatorRoom9.jpg' },
    ];

    // Adjust caption font-size based on text length so long captions fit
    const getCaptionFontSize = (text) => {
        const len = text ? text.length : 0;
        if (len <= 30) return '1.05rem';
        if (len <= 60) return '0.95rem';
        if (len <= 100) return '0.85rem';
        return '0.75rem';
    };

    return (
        <section className="photo-gallery">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1 className="gallery-title">Photo Gallery</h1>
                    <div className="gallery-accent"></div>
                    <p className="gallery-subtitle">
                        Explore moments from our maritime training institute
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="gallery-image"
                            />
                            <div className="gallery-overlay">
                                <div
                                    className="overlay-text"
                                    style={{ fontSize: getCaptionFontSize(item.title) }}
                                >
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

             
            </div>
        </section>
    );
}
