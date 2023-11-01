d1 = {'simple_key':'hello'}
key = d1['simple_key']
print(key)
d2 = {'k1':{'k2':'hello'}}
keyd2 = d2['k1']['k2']
print(keyd2)
d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}
keyd3 = d3['k1'][0]['nest_key'][1][0]
print(keyd3)