import Purchase from '../../common/interfaces/Purchase';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import './PurchasesHistory.scss';

interface PurchaseListProps {
    purchases: Purchase[],
}

const PurchasesHistory = ({ purchases }: PurchaseListProps) => {

    return (
        <div className='purchase-list-container'>
            <h2>Purchases History</h2>
            <div className="purchase-list">
                {purchases.map((purchase) => <PurchaseCard key={purchase.id
                } purchase={purchase} />)}
            </div>
        </div>
    );
};

export default PurchasesHistory;
