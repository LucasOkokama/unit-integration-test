from db import Database
import pytest


@pytest.fixture
def db():
    database = Database()
    yield database
    database.data.clear()


def test_add_user(db):
    db.add_user(1, "Jack")
    assert db.get_user(1) == "Jack"


def test_add_duplicate_user(db):
    db.add_user(1, "John")
    with pytest.raises(ValueError, match="User already exists"):
        db.add_user(1, "Diego")


def test_delete_user(db):
    db.add_user(2, "Diego")
    db.delete_user(2)
    assert db.get_user(2) is None
