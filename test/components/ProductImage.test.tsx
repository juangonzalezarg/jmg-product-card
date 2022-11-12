import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/productos';

describe('ProductImage', () => {
    test('debe de mostrar el componente sin imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg"/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe de mostrar el componente con imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
     })
});
