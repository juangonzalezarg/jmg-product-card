# JMG-Product-Card

Este es un paquete de pruebas de despliegue en npm

## Juan González

## Ejemplo

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'jmg-product-card';
```


```
<ProductCard 
    product={ product }
    initialValues={{
    count: 4,
    maxCount: 10
    }}
>
    {
    ({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
        <>
        <ProductImage/>
        <ProductTitle/>
        <ProductButtons/>
        </>
    )
    }

</ProductCard>   

```

