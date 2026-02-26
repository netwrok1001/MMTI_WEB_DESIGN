import './Library.css';
import { useState } from 'react';

export default function Library() {
    const [activeCategory, setActiveCategory] = useState('All');

    const libraryItems = [
        {
            id: 1,
            title: 'Maritime Law & Regulations',
            category: 'Reference',
            author: 'International Maritime Organization',
            type: 'Book',
            description: 'Comprehensive guide to international maritime regulations and compliance standards.',
            icon: '📚'
        },
        {
            id: 2,
            title: 'Ship Navigation Manual',
            category: 'Technical',
            author: 'Captain C.L. Dubey',
            type: 'Book',
            description: 'Modern navigation techniques and electronic charting systems for maritime professionals.',
            icon: '🧭'
        },
        {
            id: 3,
            title: 'Cargo Operations Handbook',
            category: 'Technical',
            author: 'Maritime Training Institute',
            type: 'Book',
            description: 'Best practices for safe and efficient cargo handling on commercial vessels.',
            icon: '📖'
        },
        {
            id: 4,
            title: 'STCW Code & Conventions',
            category: 'Reference',
            author: 'IMO',
            type: 'Document',
            description: 'Standards of Training, Certification and Watchkeeping for Seafarers - Official Guidelines.',
            icon: '📋'
        },
        {
            id: 5,
            title: 'Engine Room Management',
            category: 'Technical',
            author: 'Professor Ahmed Hassan',
            type: 'Book',
            description: 'Complete guide to marine engine operations, maintenance, and troubleshooting.',
            icon: '⚙️'
        },
        {
            id: 6,
            title: 'Safety at Sea Guide',
            category: 'Safety',
            author: 'Maritime Safety Commission',
            type: 'Book',
            description: 'Comprehensive resource on maritime safety procedures, emergency protocols, and risk management.',
            icon: '🚢'
        },
        {
            id: 7,
            title: 'International Maritime Incidents Database',
            category: 'Reference',
            author: 'IMO & SOLAS',
            type: 'Database',
            description: 'Case studies of maritime incidents and lessons learned for accident prevention.',
            icon: '🔍'
        },
        {
            id: 8,
            title: 'Seamanship & Knots Reference',
            category: 'Technical',
            author: 'Captain Robert Smith',
            type: 'Book',
            description: 'Detailed reference guide for essential seamanship skills and rope work techniques.',
            icon: '🪢'
        },
        {
            id: 9,
            title: 'Maritime Weather & Oceanography',
            category: 'Technical',
            author: 'Meteorological Institute',
            type: 'Book',
            description: 'Understanding weather systems, ocean currents, and their impact on maritime operations.',
            icon: '⛅'
        },
        {
            id: 10,
            title: 'Environmental Protection at Sea',
            category: 'Safety',
            author: 'MARPOL Convention',
            type: 'Document',
            description: 'International regulations for preventing pollution from ships and environmental compliance.',
            icon: '🌊'
        },
        {
            id: 11,
            title: 'Ship Construction & Stability',
            category: 'Technical',
            author: 'Naval Architecture Institute',
            type: 'Book',
            description: 'Principles of ship design, construction, and hydrostatic stability calculations.',
            icon: '🏗️'
        },
        {
            id: 12,
            title: 'Communication at Sea Protocols',
            category: 'Reference',
            author: 'Global Maritime Communication Board',
            type: 'Guide',
            description: 'Radio communication procedures, bridge resource management, and multilingual maritime phrases.',
            icon: '📡'
        }
    ];

    const categories = ['All', 'Technical', 'Reference', 'Safety'];

    const filteredItems = activeCategory === 'All' 
        ? libraryItems 
        : libraryItems.filter(item => item.category === activeCategory);

    return (
        <section className="library">
            <div className="library-container">
                <div className="library-header">
                    <h1 className="library-title">Maritime Library</h1>
                    <div className="library-accent"></div>
                    <p className="library-subtitle">
                        Access comprehensive resources, textbooks, and maritime documentation
                    </p>
                </div>

                <div className="library-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="library-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="library-card">
                            <div className="card-header">
                                <span className="card-icon">{item.icon}</span>
                                <span className="card-type">{item.type}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-author">by {item.author}</p>
                                <p className="card-description">{item.description}</p>
                                <div className="card-category">
                                    <span>{item.category}</span>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn-access">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="library-info">
                    <p>Total Resources: {filteredItems.length} | Showing: {activeCategory}</p>
                </div>
            </div>
        </section>
    );
}
