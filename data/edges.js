const edges = [
    {
       "Source":"AlSF",
       "Target":"Arch",
       "Weight":0.625
    },
    {
       "Source":"AlSF",
       "Target":"Burk",
       "Weight":0.829268292682927
    },
    {
       "Source":"AlSF",
       "Target":"Frcs",
       "Weight":0.82051282051282
    },
    {
       "Source":"AlSF",
       "Target":"HfAd",
       "Weight":0.952380952380952
    },
    {
       "Source":"AlSF",
       "Target":"Prsv",
       "Weight":0.606060606060606
    },
    {
       "Source":"AlSF",
       "Target":"Pika",
       "Weight":0.705882352941176
    },
    {
       "Source":"AlSF",
       "Target":"Snal",
       "Weight":0.756756756756757
    },
    {
       "Source":"Arch",
       "Target":"Burk",
       "Weight":0.689655172413793
    },
    {
       "Source":"Arch",
       "Target":"Frcs",
       "Weight":0.740740740740741
    },
    {
       "Source":"Arch",
       "Target":"HfAd",
       "Weight":0.666666666666667
    },
    {
       "Source":"Arch",
       "Target":"Prsv",
       "Weight":0.666666666666667
    },
    {
       "Source":"Arch",
       "Target":"Pika",
       "Weight":0.727272727272727
    },
    {
       "Source":"Arch",
       "Target":"Snal",
       "Weight":0.72
    },
    {
       "Source":"ByKc",
       "Target":"EsDv",
       "Weight":0.315789473684211
    },
    {
       "Source":"ByKc",
       "Target":"KktS",
       "Weight":0.421052631578947
    },
    {
       "Source":"ByKc",
       "Target":"MkyS",
       "Weight":0.307692307692308
    },
    {
       "Source":"ByKc",
       "Target":"MyjK",
       "Weight":0.72
    },
    {
       "Source":"ByKc",
       "Target":"MyjC",
       "Weight":0.761904761904762
    },
    {
       "Source":"ByKc",
       "Target":"NrtE",
       "Weight":0.3
    },
    {
       "Source":"ByKc",
       "Target":"SySm",
       "Weight":0.533333333333333
    },
    {
       "Source":"Burk",
       "Target":"Frcs",
       "Weight":0.777777777777778
    },
    {
       "Source":"Burk",
       "Target":"HfAd",
       "Weight":0.871794871794872
    },
    {
       "Source":"Burk",
       "Target":"Prsv",
       "Weight":0.666666666666667
    },
    {
       "Source":"Burk",
       "Target":"Pika",
       "Weight":0.645161290322581
    },
    {
       "Source":"Burk",
       "Target":"Snal",
       "Weight":0.764705882352941
    },
    {
       "Source":"Chmv",
       "Target":"EsDv",
       "Weight":0.428571428571429
    },
    {
       "Source":"Chmv",
       "Target":"Nkkv",
       "Weight":0.352941176470588
    },
    {
       "Source":"Chmv",
       "Target":"NrtE",
       "Weight":0.533333333333333
    },
    {
       "Source":"Chmv",
       "Target":"NRv",
       "Weight":0.5
    },
    {
       "Source":"Chmv",
       "Target":"SmnX",
       "Weight":0.666666666666667
    },
    {
       "Source":"Chmv",
       "Target":"SySm",
       "Weight":0.6
    },
    {
       "Source":"Dkkv",
       "Target":"EsDv",
       "Weight":0.6
    },
    {
       "Source":"Dkkv",
       "Target":"KktS",
       "Weight":0.4
    },
    {
       "Source":"Dkkv",
       "Target":"Ks2S",
       "Weight":0.909090909090909
    },
    {
       "Source":"Dkkv",
       "Target":"Nkkv",
       "Weight":0.695652173913043
    },
    {
       "Source":"DKK",
       "Target":"Ftgy",
       "Weight":0.545454545454545
    },
    {
       "Source":"DKK",
       "Target":"Higa",
       "Weight":0.580645161290323
    },
    {
       "Source":"DKK",
       "Target":"HgE",
       "Weight":0.594594594594595
    },
    {
       "Source":"DKK",
       "Target":"IrbK",
       "Weight":0.666666666666667
    },
    {
       "Source":"DKK",
       "Target":"IznC",
       "Weight":0.526315789473684
    },
    {
       "Source":"DKK",
       "Target":"MEK",
       "Weight":0.318181818181818
    },
    {
       "Source":"DKK",
       "Target":"MyjK",
       "Weight":0.3125
    },
    {
       "Source":"DKK",
       "Target":"NKIR",
       "Weight":0.517241379310345
    },
    {
       "Source":"DKK",
       "Target":"Saka",
       "Weight":0.482758620689655
    },
    {
       "Source":"DKK",
       "Target":"SPHK",
       "Weight":0.578947368421053
    },
    {
       "Source":"DKK",
       "Target":"SYKI",
       "Weight":0.6875
    },
    {
       "Source":"DKK",
       "Target":"TrmK",
       "Weight":0.55
    },
    {
       "Source":"EsDv",
       "Target":"KktS",
       "Weight":0.444444444444444
    },
    {
       "Source":"EsDv",
       "Target":"Ks2S",
       "Weight":0.5
    },
    {
       "Source":"EsDv",
       "Target":"MyjC",
       "Weight":0.3
    },
    {
       "Source":"EsDv",
       "Target":"Nkkv",
       "Weight":0.476190476190476
    },
    {
       "Source":"EsDv",
       "Target":"NrtE",
       "Weight":0.421052631578947
    },
    {
       "Source":"EsDv",
       "Target":"NRv",
       "Weight":0.375
    },
    {
       "Source":"EsDv",
       "Target":"SmnX",
       "Weight":0.375
    },
    {
       "Source":"EsDv",
       "Target":"SySm",
       "Weight":0.428571428571429
    },
    {
       "Source":"Frcs",
       "Target":"HfAd",
       "Weight":0.864864864864865
    },
    {
       "Source":"Frcs",
       "Target":"NrtE",
       "Weight":0.296296296296296
    },
    {
       "Source":"Frcs",
       "Target":"Prsv",
       "Weight":0.642857142857143
    },
    {
       "Source":"Frcs",
       "Target":"Pika",
       "Weight":0.689655172413793
    },
    {
       "Source":"Frcs",
       "Target":"Snal",
       "Weight":0.75
    },
    {
       "Source":"Ftgy",
       "Target":"Higa",
       "Weight":0.466666666666667
    },
    {
       "Source":"Ftgy",
       "Target":"HgE",
       "Weight":0.555555555555556
    },
    {
       "Source":"Ftgy",
       "Target":"IrbK",
       "Weight":0.620689655172414
    },
    {
       "Source":"Ftgy",
       "Target":"IznC",
       "Weight":0.540540540540541
    },
    {
       "Source":"Ftgy",
       "Target":"MEK",
       "Weight":0.325581395348837
    },
    {
       "Source":"Ftgy",
       "Target":"MyjC",
       "Weight":0.296296296296296
    },
    {
       "Source":"Ftgy",
       "Target":"NKIR",
       "Weight":0.491228070175439
    },
    {
       "Source":"Ftgy",
       "Target":"Saka",
       "Weight":0.456140350877193
    },
    {
       "Source":"Ftgy",
       "Target":"SPHK",
       "Weight":0.594594594594595
    },
    {
       "Source":"Ftgy",
       "Target":"SYKI",
       "Weight":0.580645161290323
    },
    {
       "Source":"Ftgy",
       "Target":"TrmH",
       "Weight":0.4
    },
    {
       "Source":"Ftgy",
       "Target":"TrmK",
       "Weight":0.666666666666667
    },
    {
       "Source":"HfAd",
       "Target":"Prsv",
       "Weight":0.645161290322581
    },
    {
       "Source":"HfAd",
       "Target":"Pika",
       "Weight":0.75
    },
    {
       "Source":"HfAd",
       "Target":"Snal",
       "Weight":0.8
    },
    {
       "Source":"Higa",
       "Target":"HgE",
       "Weight":0.470588235294118
    },
    {
       "Source":"Higa",
       "Target":"IrbK",
       "Weight":0.666666666666667
    },
    {
       "Source":"Higa",
       "Target":"IznC",
       "Weight":0.514285714285714
    },
    {
       "Source":"Higa",
       "Target":"NKIR",
       "Weight":0.436363636363636
    },
    {
       "Source":"Higa",
       "Target":"Saka",
       "Weight":0.472727272727273
    },
    {
       "Source":"Higa",
       "Target":"SPHK",
       "Weight":0.514285714285714
    },
    {
       "Source":"Higa",
       "Target":"SYKI",
       "Weight":0.482758620689655
    },
    {
       "Source":"Higa",
       "Target":"TrmH",
       "Weight":0.428571428571429
    },
    {
       "Source":"Higa",
       "Target":"TrmK",
       "Weight":0.648648648648649
    },
    {
       "Source":"HgE",
       "Target":"IrbK",
       "Weight":0.606060606060606
    },
    {
       "Source":"HgE",
       "Target":"IznC",
       "Weight":0.48780487804878
    },
    {
       "Source":"HgE",
       "Target":"MEK",
       "Weight":0.297872340425532
    },
    {
       "Source":"HgE",
       "Target":"NKIR",
       "Weight":0.491803278688525
    },
    {
       "Source":"HgE",
       "Target":"Saka",
       "Weight":0.459016393442623
    },
    {
       "Source":"HgE",
       "Target":"SPHK",
       "Weight":0.536585365853659
    },
    {
       "Source":"HgE",
       "Target":"SYKI",
       "Weight":0.628571428571429
    },
    {
       "Source":"HgE",
       "Target":"TrmK",
       "Weight":0.604651162790698
    },
    {
       "Source":"IrbK",
       "Target":"IznC",
       "Weight":0.529411764705882
    },
    {
       "Source":"IrbK",
       "Target":"MEK",
       "Weight":0.35
    },
    {
       "Source":"IrbK",
       "Target":"NKIR",
       "Weight":0.444444444444444
    },
    {
       "Source":"IrbK",
       "Target":"Saka",
       "Weight":0.481481481481482
    },
    {
       "Source":"IrbK",
       "Target":"SPHK",
       "Weight":0.588235294117647
    },
    {
       "Source":"IrbK",
       "Target":"SYKI",
       "Weight":0.571428571428571
    },
    {
       "Source":"IrbK",
       "Target":"TrmH",
       "Weight":0.444444444444444
    },
    {
       "Source":"IrbK",
       "Target":"TrmK",
       "Weight":0.666666666666667
    },
    {
       "Source":"IznC",
       "Target":"MEK",
       "Weight":0.458333333333333
    },
    {
       "Source":"IznC",
       "Target":"NKIR",
       "Weight":0.483870967741935
    },
    {
       "Source":"IznC",
       "Target":"Saka",
       "Weight":0.548387096774194
    },
    {
       "Source":"IznC",
       "Target":"SPHK",
       "Weight":0.714285714285714
    },
    {
       "Source":"IznC",
       "Target":"SYKI",
       "Weight":0.666666666666667
    },
    {
       "Source":"IznC",
       "Target":"TrmK",
       "Weight":0.590909090909091
    },
    {
       "Source":"KktS",
       "Target":"Ks2S",
       "Weight":0.4
    },
    {
       "Source":"KktS",
       "Target":"MyjK",
       "Weight":0.333333333333333
    },
    {
       "Source":"KktS",
       "Target":"MyjC",
       "Weight":0.4
    },
    {
       "Source":"KktS",
       "Target":"Nkkv",
       "Weight":0.380952380952381
    },
    {
       "Source":"Ks2S",
       "Target":"Nkkv",
       "Weight":0.695652173913043
    },
    {
       "Source":"MEK",
       "Target":"NKIR",
       "Weight":0.411764705882353
    },
    {
       "Source":"MEK",
       "Target":"Saka",
       "Weight":0.411764705882353
    },
    {
       "Source":"MEK",
       "Target":"SPHK",
       "Weight":0.375
    },
    {
       "Source":"MEK",
       "Target":"SYKI",
       "Weight":0.333333333333333
    },
    {
       "Source":"MkyS",
       "Target":"MyjK",
       "Weight":0.333333333333333
    },
    {
       "Source":"MkyS",
       "Target":"NrtE",
       "Weight":0.307692307692308
    },
    {
       "Source":"MkyS",
       "Target":"SySm",
       "Weight":0.5
    },
    {
       "Source":"MyjK",
       "Target":"MyjC",
       "Weight":0.846153846153846
    },
    {
       "Source":"MyjK",
       "Target":"NrtE",
       "Weight":0.32
    },
    {
       "Source":"MyjK",
       "Target":"SySm",
       "Weight":0.4
    },
    {
       "Source":"MyjC",
       "Target":"SySm",
       "Weight":0.375
    },
    {
       "Source":"Nkkv",
       "Target":"NrtE",
       "Weight":0.454545454545455
    },
    {
       "Source":"Nkkv",
       "Target":"NRv",
       "Weight":0.421052631578947
    },
    {
       "Source":"Nkkv",
       "Target":"SmnX",
       "Weight":0.315789473684211
    },
    {
       "Source":"NKIR",
       "Target":"Saka",
       "Weight":0.731707317073171
    },
    {
       "Source":"NKIR",
       "Target":"SPHK",
       "Weight":0.516129032258065
    },
    {
       "Source":"NKIR",
       "Target":"SYKI",
       "Weight":0.464285714285714
    },
    {
       "Source":"NKIR",
       "Target":"TrmH",
       "Weight":0.363636363636364
    },
    {
       "Source":"NKIR",
       "Target":"TrmK",
       "Weight":0.53125
    },
    {
       "Source":"NrtE",
       "Target":"NRv",
       "Weight":0.705882352941176
    },
    {
       "Source":"NrtE",
       "Target":"SmnX",
       "Weight":0.823529411764706
    },
    {
       "Source":"NrtE",
       "Target":"SySm",
       "Weight":0.4
    },
    {
       "Source":"NRv",
       "Target":"SmnX",
       "Weight":0.714285714285714
    },
    {
       "Source":"Prsv",
       "Target":"Pika",
       "Weight":0.782608695652174
    },
    {
       "Source":"Prsv",
       "Target":"Snal",
       "Weight":0.769230769230769
    },
    {
       "Source":"Pika",
       "Target":"Snal",
       "Weight":0.814814814814815
    },
    {
       "Source":"Saka",
       "Target":"SPHK",
       "Weight":0.548387096774194
    },
    {
       "Source":"Saka",
       "Target":"SYKI",
       "Weight":0.464285714285714
    },
    {
       "Source":"Saka",
       "Target":"TrmH",
       "Weight":0.436363636363636
    },
    {
       "Source":"Saka",
       "Target":"TrmK",
       "Weight":0.65625
    },
    {
       "Source":"SmnX",
       "Target":"SySm",
       "Weight":0.333333333333333
    },
    {
       "Source":"SPHK",
       "Target":"SYKI",
       "Weight":0.722222222222222
    },
    {
       "Source":"SPHK",
       "Target":"TrmH",
       "Weight":0.457142857142857
    },
    {
       "Source":"SPHK",
       "Target":"TrmK",
       "Weight":0.681818181818182
    },
    {
       "Source":"SYKI",
       "Target":"TrmK",
       "Weight":0.631578947368421
    },
    {
       "Source":"TrmH",
       "Target":"TrmK",
       "Weight":0.702702702702703
    }
 ]