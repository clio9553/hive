import React from 'react'
import { forwardRef } from 'react';
import '../../styles/categories.css'

const Categories = forwardRef(({ categories, handleCategory, selectedCategory }, ref) => {
    return (
        <section ref={ref} className="categories-section">
            <div className="category-row">

                <div className="category-cards">
                    {categories.map(({ label, value }, idx) => {
                        let cat_class = `category-card card${(idx + 1)} ${value === selectedCategory ? "selected" : ""} `;
                        return (
                            <div className={cat_class}
                                key={idx}
                                onClick={() => handleCategory(value)} >
                                <h1 className="category-link">{label}</h1>
                                <div className="category-arrow ">
                                    {/* <BsArrowRight fontSize={30} color='var(--accent-color)' /> */}
                                    <svg width="50" height="20" viewBox="0 0 35 16" fill="#000"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34.6929 8.70711C35.0834 8.31658 35.0834 7.68342 34.6929 7.29289L28.329 0.928932C27.9384 0.538408 27.3053 0.538408 26.9147 0.928932C26.5242 1.31946 26.5242 1.95262 26.9147 2.34315L32.5716 8L26.9147 13.6569C26.5242 14.0474 26.5242 14.6805 26.9147 15.0711C27.3053 15.4616 27.9384 15.4616 28.329 15.0711L34.6929 8.70711ZM0 9H33.9858V7H0V9Z"
                                            fill="#000">
                                        </path>
                                    </svg>
                                </div>

                            </div>)
                    })
                    }
                </div>
            </div>
        </section>
    )
})

export default Categories
