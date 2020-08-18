import pandas as pd
import matplotlib.pyplot as plt
from geojson import Point, Feature, FeatureCollection, dump, LineString



def plot_volumes():
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

def generate_geojson_pipelines(df):
  features = []
  for i in len(df):
    linestr = LineString([(df.loc[i,5], df.loc[i,4]), (df.loc[i,7],df.loc[i,6])]) #long, lat
    
    features.append(Feature(geometry=linestr, properties={"name": f"{df.loc[i,0]}"}))

  # add more features...
  # features.append(...)

  feature_collection = FeatureCollection(features)

  with open('allpipelines.geojson', 'w') as f:
    dump(feature_collection, f)

if __name__ == "__main__":

  excel_df = pd.read_excel('Export_GTF_IEA.xlsx')
  print(excel_df.columns.tolist()[0:7])
  #print(excel_df.head())

  #generate_geojson_pipelines(excel_df)
  



#historic data starts from 6th column to 145, so need to slice [5:145]