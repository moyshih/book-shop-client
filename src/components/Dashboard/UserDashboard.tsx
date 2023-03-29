import { useEffect, useState } from 'react';
import PurchasesHistory from '../PurchasesHistory/PurchasesHistory';
import auth from '../../services/authService';
import purchasesApi from '../../api/purchasesApi';
import Purchase from '../../common/interfaces/Purchase';
import useBooks from '../../hooks/useBooks';
import BooksWrapper from '../BooksWrapper/BooksWrapper';

const UserDashboard = () => {
    const { books } = useBooks();
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const user = auth.getCurrentUser();

    useEffect(() => {
        fetchPurchases();
    }, []);

    const fetchPurchases = () => {
        purchasesApi.getPurchases().then(res => {
            res && setPurchases(res.data.data);
        })
            .catch(_ => { });
    };

    return (
        <>
            {user ?
                <div>
                    <BooksWrapper
                        books={books}
                        isUserAuth={true}
                        fetchPurchases={fetchPurchases} />
                    <PurchasesHistory purchases={purchases} />
                </div>
                :
                <div>
                    You are not authorized to view this page.
                </div>}
        </>
    );
};

export default UserDashboard;
