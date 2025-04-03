from shopping_cart import ShoppingCart


def test_can_add_item_to_cart():
    cart = ShoppingCart()
    cart.add("apple")
    assert cart.size() == 1


def test_cart_contains_added_item():
    cart = ShoppingCart()
    cart.add("apple")
    assert "apple" in cart.get_items()
