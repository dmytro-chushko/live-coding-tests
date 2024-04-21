# equipment = {'key': 3, 'mace': 1, 'gold coin': 24, 'lantern': 1, 'stone': 10}
# key='gold coin'
# print(equipment[key])
# 511
# countryes = {'Ukraine': 'Kyiv','France': 'Paris','Denmark': 'Copenhagen',
#     'China': 'Beijing',
#     'Canada': 'Ottawa'}
# sorted = sorted(countryes.items(), reverse=True)
# print(sorted)

# # 510
# films = {'Avengers: Endgame': 2019, 'Iron Man': 2008,'Thor': 2011,'Guardians of the Galaxy': 2014}
# sorted = sorted(films.items())
# for name, year in sorted:
#     print(f"('{name}', '{year}')", end=" ")


# 508
# a=int(input())
# d={232: "Hi, Alice!", 550: "Hi, Bob!", 190: "Hi, Jack!", 500: "hi, to all!"}
# print(d[a])




# 509
# player_inventory={"key":3, "mace":1, "gold coin":24, "lantern":1, "stone":10}
# print("Equipment:")
# for key, values in player_inventory.items():
#     print(values, key, sep=" --- ")
# sum = 0
# for el in player_inventory.values():
#     sum+=el
# print("Total number of things:", sum)

a=[1, 2, 2, 2, 3, 3, 4]
c = a.copy()
b = 0
for i in a:
  c.remove(i)
  print(a, i, sep="-")
  for el in c:
    if i == el:
      b+=1
print(b)
  