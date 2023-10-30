package app.mobilesixsapp;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;


public class Database extends SQLiteOpenHelper {

    public Database(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        String qry1 = "CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, email TEXT, password TEXT)";
        sqLiteDatabase.execSQL(qry1);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int oldVersion, int newVersion) {

    }
    public  void register (String username, String email, String password){
        ContentValues cv = new ContentValues();
        cv.put("username", username);
        cv.put("email", email);
        cv.put("password", password);
        SQLiteDatabase db = getWritableDatabase();
        db.insert("users", null, cv);
        db.close();
    }
    public int login(String username, String password) {
        int result = 0;
        SQLiteDatabase db = getReadableDatabase();

        String selection = "username = ? AND password = ?";
        String[] selectionArgs = {username, password};

        Cursor c = db.query("users", null, selection, selectionArgs, null, null, null);

        if (c.moveToFirst()) {
            result = 1;
        }

        // Close the cursor and the database.
        c.close();
        db.close();

        return result;
    }
}
