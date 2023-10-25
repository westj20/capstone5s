package app.mobilesixsapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class LoginActivity extends AppCompatActivity {

    EditText edUserName, edPassword;
    Button btn;
    TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        edUserName = findViewById(R.id.editTextLoginUsername);
        edPassword = findViewById(R.id.editPassword);
        btn = findViewById(R.id.button);
        tv = findViewById(R.id.textView2);

        btn.setOnClickListener((new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String username = edUserName.getText().toString();
                String password = edPassword.getText().toString();
                if (username.length() == 0 || password.length() == 0) {
                    Toast.makeText(getApplicationContext(), "Username or Password Incomplete", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(getApplicationContext(), "Login Success", Toast.LENGTH_SHORT).show();
                }
            }
        }));
tv.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
    }
});
    }
}