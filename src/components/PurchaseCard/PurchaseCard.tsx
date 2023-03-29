import Purchase from '../../common/interfaces/Purchase';
import './PurchaseCard.scss';
import React from 'react'

interface PurchaseCardProps {
    purchase: Purchase
}

const PurchaseCard = ({ purchase }: PurchaseCardProps) => {
    return (
        <div className='purchase-card-container'>
            <h3>{purchase.book.title}</h3>
            <p>Author: {purchase.book.author}</p>
            <p>Publisher: {purchase.book.publisher}</p>
            <p>Date Purchased: {new Date(purchase.date).toLocaleDateString()}</p>
        </div>
    )
}

export default PurchaseCard;