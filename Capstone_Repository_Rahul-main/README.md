 
# DataScience Coursera Capstone Project 
Made By- Rahul Morabiya 

This Repository is the Final Project for Coursera Data Science Course Provided by IBM enabled By RelianceFoundation. It is the Capstone Project for the 5 month course and this is the end of the course which was an awesome and greatly enriching tour which certainly left me with a learning regimen and thirst to learn more with obvious new sets of Knowledge.

Objective: The primary objective of this capstone project was to analyze and predict the success of SpaceX Falcon 9 rocket launch landings using advanced data science techniques, including machine learning.

Tools Used: Python served as the primary programming language for this project. I leveraged a variety of libraries and frameworks, including BeautifulSoup for web scraping, Pandas and NumPy for data manipulation, Scikit-learn for machine learning tasks, Folium for geospatial analysis, and Matplotlib and Seaborn for data visualization.

Project Workflow:
1) Data Collection: The project began with the collection of data on SpaceX Falcon 9 and Falcon Heavy launches. I utilized web scraping techniques to extract relevant information from Wikipedia's "List of Falcon 9 and Falcon Heavy launches" page. BeautifulSoup was used for webscraping html tables on the webpage.
2) Data Cleaning: Once the data was collected, I proceeded to clean and preprocess it. This involved handling missing values, removing duplicates, and ensuring consistency in the data format and restructuring the data format to be suitable for machine learning model.
3) Feature Engineering : To enhance the predictive power of the models, I engineered additional features from the available data. This included extracting information such as launch dates, booster versions, payload masses, orbit types, launch sites, and outcomes. Notably, the dataset included cases where the rocket successfully landed in specific parts of the ocean (True Ocean), as well as cases where it did not successfully land in those specific parts (False Ocean). Similarly, distinctions were made for landing ground pads (True RTLS, False RTLS) and drone ship landings (True ASDS, False ASDS).
4) Exploratory Data Analysis : With the dataset prepared, I conducted exploratory data analysis to gain insights into the underlying patterns and relationships. Visualizations such as line plots, scatter plots, and bar plots were used to elucidate trends and anomalies in the data.
5) Geospatial Analysis using Folium: Leveraging the Folium library, I performed geospatial analysis to visualize the locations of launch sites and the success/failure of landings on a map. This provided valuable spatial context to the analysis.
6) Machine Learning Model Training: The crux of the project involved training machine learning models to predict the success of Falcon 9 rocket launches. I experimented with various classification algorithms, including Support Vector Machines (SVM), Decision Trees, Logistic Regression, and K-Nearest Neighbors.
7) Model Evaluation: To evaluate the performance of the trained models, I conducted rigorous testing and validation, including hyperparameter tuning and the generation of confusion matrices. This allowed me to assess the accuracy, precision, recall, and F1-score of each model.
8) Model Deployment on Dash App: The best performing model, determined to be the Classification Tree, was deployed in a Dash web application. This interactive dashboard enables users to visualize launch data and make predictions regarding the success of future rocket launches based on input parameters.

Project Outcome:
The completion of this capstone project represents a significant milestone in my data science journey. Not only have I gained practical experience in data collection, cleaning, analysis, and machine learning model deployment, but I have also developed a deep understanding of the complexities involved in real-world data science projects.
Through this project, I have demonstrated proficiency in leveraging advanced data science techniques to extract meaningful insights from complex datasets. Moreover, the predictive models developed as part of this project have practical applications in the field of space exploration and contribute to the ongoing efforts of organizations such as SpaceX to improve the success rate of rocket launches.

Thankyou to all who read this.
