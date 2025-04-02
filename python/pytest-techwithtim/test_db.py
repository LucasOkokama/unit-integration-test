from db import Database, save_user
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


def test_save_user(mocker):
    mock_conn = mocker.patch("sqlite3.connect")
    mock_cursor = mock_conn.return_value.cursor.return_value

    save_user("Olivia", 35)

    mock_conn.assert_called_once_with("users.db")
    mock_cursor.execute.assert_called_once_with(
        "INSERT INTO users (name, age) VALUES (?, ?)", ("Olivia", 35)
    )
