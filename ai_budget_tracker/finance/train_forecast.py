import os
import django
import pandas as pd
from prophet import Prophet
import joblib

# ✅ Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ai_budget_tracker.settings")
django.setup()

# ✅ Import Django models AFTER setting up Django
from finance.models import Expense

# ✅ Fetch historical expense data
expenses = Expense.objects.all().values("date", "amount")

# ✅ Convert to Pandas DataFrame
df = pd.DataFrame(expenses)

# ✅ Rename columns for Prophet
df.rename(columns={"date": "ds", "amount": "y"}, inplace=True)

# ✅ Ensure DataFrame is not empty
if df.empty:
    print("❌ No data available. Please add expenses first!")
else:
    # ✅ Train the forecasting model
    model = Prophet()
    model.fit(df)

    # ✅ Save the trained model
    joblib.dump(model, "ai_budget_tracker/finance/budget_forecast.pkl")
    print("✅ Model trained and saved successfully!")