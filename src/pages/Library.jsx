import Footer from '../Components/Footer';
import './Library.css';
import { useState } from 'react';

export default function Library() {
    const [activeCategory, setActiveCategory] = useState('All');

    const libraryItems = [
        
    ];

    const categories = ['All', 'Technical', 'Reference', 'Safety'];

    const filteredItems = activeCategory === 'All' 
        ? libraryItems 
        : libraryItems.filter(item => item.category === activeCategory);

    return (
        <section className="library">
            <div className="library-container">
                <div className="library-header">
                    <h1 className="library-title">E-Books</h1>
                    <div className="library-accent"></div>
                    <p className="library-subtitle">
                        Access comprehensive resources, textbooks, and maritime documentation
                    </p>
                </div>;
            </div>;
        </section>
    );
}
