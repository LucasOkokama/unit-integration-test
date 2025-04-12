package com.codesnippet.ecom.Service;

import com.codesnippet.ecom.Entity.Product;
import com.codesnippet.ecom.Repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

  @InjectMocks
  ProductService productService;

  @Mock
  ProductRepository productRepository;

  @Test
  void shouldAddProductSuccessfully(){
    var product = new Product(1, "Book", 60, "Harry Potter", 200);

    when(productRepository.save(product)).thenReturn(product);
    var addedProduct = productService.addProduct(product);

    assertNotNull(addedProduct);
    assertTrue(product.getId() == 1);
    assertEquals(product.getId(), addedProduct.getId());
    assertEquals(product.getName(), addedProduct.getName());
  }

  @Test
  public void shouldDeleteProductSuccessfully(){
    doNothing().when(productRepository).deleteById(1);
    productService.deleteProduct(1);
    verify(productRepository, times(1)).deleteById(1);
  }

  @Test
  void validadeProductName() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    Method validadeProductName = ProductService.class.getDeclaredMethod("validateProductName", String.class);
    validadeProductName.setAccessible(true);
    Boolean book = (Boolean) validadeProductName.invoke(productService, "Book");
    assertTrue(book);
  }

  @Test
  void validadeProductNameIfNameIsInvalid() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    Method validadeProductName = ProductService.class.getDeclaredMethod("validateProductName", String.class);
    validadeProductName.setAccessible(true);
    Boolean book = (Boolean) validadeProductName.invoke(productService, "");
    assertFalse(book);
  }
}
