import React from 'react'
import '../../styles/categories.css'
function Categories({ categories, handleCategory }) {

    return (
        <section className="categories-section">
            <div className="category-row">
                <div className="category-words">
                    <h1 className="cat-title">Catacombs</h1>
                    <p className="cat-desc" >
                        We have the most <strong>versatile</strong>  range of categories that will suite most if not all who wish to be part of the <strong>HIVE</strong>.
                        We intend to give innovators a headstart while providing inventors a platform to source for their next <strong>Honey Pot.</strong>
                    </p>
                </div>
                <div className="category-cards">
                    {categories.map((cat, i) => {
                        let cat_class = 'category-card card' + (i + 1);
                        return (
                            <div className={cat_class}
                                key={i}
                                onClick={(cat) => handleCategory(cat)} >

                                <h1 className="category-link">{cat}</h1>

                                <div className="category-arrow ">
                                    <svg width="50" height="20" viewBox="0 0 35 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34.6929 8.70711C35.0834 8.31658 35.0834 7.68342 34.6929 7.29289L28.329 0.928932C27.9384 0.538408 27.3053 0.538408 26.9147 0.928932C26.5242 1.31946 26.5242 1.95262 26.9147 2.34315L32.5716 8L26.9147 13.6569C26.5242 14.0474 26.5242 14.6805 26.9147 15.0711C27.3053 15.4616 27.9384 15.4616 28.329 15.0711L34.6929 8.70711ZM0 9H33.9858V7H0V9Z"
                                            fill="#F3F8FF">
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
}

export default Categories
