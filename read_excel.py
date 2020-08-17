import pandas as pd
import matplotlib.pyplot as plt

excel_df = pd.read_excel('Export_GTF_IEA.xlsx')

print(excel_df.head())

start_date = excel_df.columns.tolist()[5]
end_date = excel_df.columns.tolist()[-1]

print(start_date, type(start_date))

array = excel_df.loc[0, start_date:end_date]
print(array)

date_arr = pd.date_range(start_date,end_date, periods=len(array))
plt.plot(date_arr, array)
plt.scatter(date_arr, array, s=15)
plt.ylabel('Volume (Million cubic metres)')
plt.xlabel('Year')
plt.title('Adriatic LNG')
plt.show()



#historic data starts from 6th column to 145, so need to slice [5:145]