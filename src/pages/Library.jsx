import Footer from '../Components/Footer';
import './Library.css';
import { useState } from 'react';

export default function Library() {
    const [activeCategory, setActiveCategory] = useState('All');

    const libraryItems = [
        { id: 1, title: 'STCW Code Handbook', category: 'Technical' },
        { id: 2, title: 'Maritime Safety Reference', category: 'Safety' },
        { id: 3, title: 'Navigation Essentials', category: 'Reference' },
    ];

    const categories = ['All', 'Technical', 'Reference', 'Safety'];

    const filteredItems = activeCategory === 'All'
        ? libraryItems
        : libraryItems.filter((item) => item.category === activeCategory);

    return (
        <section className="library">
            <div className="library-container">
                <div className="library-header">
                    <h1 className="library-title">E-Books</h1>
                    <div className="library-accent"></div>
                    <p className="library-subtitle">
                        Access comprehensive resources, textbooks, and maritime documentation
                    </p>
                </div>

                <div className="library-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`library-filter ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="library-grid">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <article key={item.id} className="library-item">
                                <h2>{item.title}</h2>
                                <span>{item.category}</span>
                            </article>
                        ))
                    ) : (
                        <p className="library-empty">No resources available in this category yet.</p>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    );
}
