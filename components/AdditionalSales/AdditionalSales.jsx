
import { data } from 'autoprefixer';
import { AdditionalSalesCard } from '../AdditionalSalesCard/AdditionalSalesCard';
import styles from './AdditionalSales.module.scss'
import imageUrl from "@/public/images/card-img.png";
export const AdditionalSales = () => {

    const mockAdditionalSalesData = [{id: 1, title: 'Ультра черная футболка', price: '26.25' , image : {imageUrl}},
    {id: 2, title: 'Ультра черная футболка', price: '26.25' , image : {imageUrl}},
    {id: 3, title: 'Ультра черная футболка', price: '26.25' , image : {imageUrl}},
    {id: 4, title: 'Ультра черная футболка', price: '26.25' , image : {imageUrl}},
    {id: 5, title: 'Ультра черная футболка', price: '26.25' , image : {imageUrl}},
    {id: 6, title: 'Ультра черная футболка', price: '26.25' , image : {imageUrl}}
]

    return (
          <div className={styles.additionalSales}>
        <h2 className={styles.additionalSales__title}>Рекомендуем к покупке</h2>


        <div className={styles.additionalSales__cards}>
        {mockAdditionalSalesData.map((cardData) => <AdditionalSalesCard key={cardData.id} data={cardData}/>)}
        </div>
      
      </div>
    )
}