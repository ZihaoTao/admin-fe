/*
* @Author: Rosen
* @Date:   2018-01-31 13:19:15
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-04 22:52:34
*/
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Product{
    getProductList(listParam){
        let url     = '',
            data    = {};
        if(listParam.listType === 'list'){
            url                         = '/manage/product/list.do';
            data.pageNum                = listParam.pageNum;
        }else if(listParam.listType === 'search'){
            url = '/manage/product/search.do';
            data.pageNum                = listParam.pageNum;
            data[listParam.searchType]  = listParam.keyword;
        }
        return _mm.request({
            type    : 'post',
            url     : url,
            data    : data
        });
    }
    getProduct(productId){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/detail.do',
            data    : {
                productId : productId || 0
            }
        });
    }
    setProductStatus(productInfo){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/set_sale_status.do',
            data    : productInfo
        });
    }
    checkProduct(product){
        let result = {
            status: true,
            msg: 'Verified'
        };
        if(typeof product.name !== 'string' || product.name.length ===0){
            return {
                status: false,
                msg: 'Product name cannot be blank.'
            }
        }
        if(typeof product.subtitle !== 'string' || product.subtitle.length ===0){
            return {
                status: false,
                msg: 'Product description cannot be blank.'
            }
        }
        if(typeof product.categoryId !== 'number' || !(product.categoryId > 0)){
            return {
                status: false,
                msg: 'Please input category name.'
            }
        }
        if(typeof product.price !== 'number' || !(product.price >= 0)){
            return {
                status: false,
                msg: 'Please input correct product price.'
            }
        }
        if(typeof product.stock !== 'number' || !(product.stock >= 0)){
            return {
                status: false,
                msg: 'Please input correct stock number.'
            }
        }
        
        return result;
    }
    saveProduct(product){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/save.do',
            data    : product
        });
    }
    getCategoryList(parentCategoryId){
        return _mm.request({
            type    : 'post',
            url     : '/manage/category/get_category.do',
            data    : {
                categoryId : parentCategoryId || 0
            }
        });
    }
    saveCategory(category){
        return _mm.request({
            type    : 'post',
            url     : '/manage/category/add_category.do',
            data    : category
        });
    }
    updateCategoryName(category){
        return _mm.request({
            type    : 'post',
            url     : '/manage/category/set_category_name.do',
            data    : category
        });
    }
}

export default Product;