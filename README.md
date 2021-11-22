# Jest with node 16

This repo was created to expose the memory issue with jest in the latest
version of node.

When using jest with node 16.11+, the memory usage can easily go out of
control even for very simple test suites like those used in this repo.

## Results

Running tests using node 16.10

```sh
./test.sh 16.10
```

Results:

```
 PASS  src/52.test.js (40 MB heap size)
 PASS  src/73.test.js (47 MB heap size)
 PASS  src/12.test.js (53 MB heap size)
 PASS  src/15.test.js (59 MB heap size)
 PASS  src/36.test.js (64 MB heap size)
 PASS  src/67.test.js (70 MB heap size)
 PASS  src/34.test.js (74 MB heap size)
 PASS  src/60.test.js (79 MB heap size)
 PASS  src/29.test.js (84 MB heap size)
 PASS  src/45.test.js (48 MB heap size)
 PASS  src/62.test.js (54 MB heap size)
 PASS  src/26.test.js (59 MB heap size)
 PASS  src/8.test.js (78 MB heap size)
 PASS  src/55.test.js (83 MB heap size)
 PASS  src/90.test.js (88 MB heap size)
 PASS  src/48.test.js (71 MB heap size)
 PASS  src/81.test.js (76 MB heap size)
 PASS  src/85.test.js (81 MB heap size)
 PASS  src/19.test.js (86 MB heap size)
 PASS  src/40.test.js (90 MB heap size)
 PASS  src/20.test.js (86 MB heap size)
 PASS  src/96.test.js (92 MB heap size)
 PASS  src/75.test.js (98 MB heap size)
 PASS  src/63.test.js (104 MB heap size)
 PASS  src/49.test.js (109 MB heap size)
 PASS  src/72.test.js (115 MB heap size)
 PASS  src/88.test.js (120 MB heap size)
 PASS  src/39.test.js (74 MB heap size)
 PASS  src/35.test.js (79 MB heap size)
 PASS  src/94.test.js (84 MB heap size)
 PASS  src/92.test.js (88 MB heap size)
 PASS  src/68.test.js (93 MB heap size)
 PASS  src/50.test.js (98 MB heap size)
 PASS  src/69.test.js (102 MB heap size)
 PASS  src/25.test.js (107 MB heap size)
 PASS  src/3.test.js (112 MB heap size)
 PASS  src/6.test.js (117 MB heap size)
 PASS  src/53.test.js (122 MB heap size)
 PASS  src/93.test.js (97 MB heap size)
 PASS  src/11.test.js (102 MB heap size)
 PASS  src/56.test.js (106 MB heap size)
 PASS  src/61.test.js (111 MB heap size)
 PASS  src/16.test.js (116 MB heap size)
 PASS  src/41.test.js (121 MB heap size)
 PASS  src/59.test.js (126 MB heap size)
 PASS  src/87.test.js (131 MB heap size)
 PASS  src/65.test.js (150 MB heap size)
 PASS  src/22.test.js (156 MB heap size)
 PASS  src/23.test.js (161 MB heap size)
 PASS  src/1.test.js (166 MB heap size)
 PASS  src/9.test.js (101 MB heap size)
 PASS  src/21.test.js (106 MB heap size)
 PASS  src/24.test.js (112 MB heap size)
 PASS  src/30.test.js (117 MB heap size)
 PASS  src/33.test.js (121 MB heap size)
 PASS  src/42.test.js (126 MB heap size)
 PASS  src/46.test.js (145 MB heap size)
 PASS  src/84.test.js (151 MB heap size)
 PASS  src/80.test.js (156 MB heap size)
 PASS  src/43.test.js (162 MB heap size)
 PASS  src/4.test.js (167 MB heap size)
 PASS  src/13.test.js (106 MB heap size)
 PASS  src/95.test.js (111 MB heap size)
 PASS  src/76.test.js (116 MB heap size)
 PASS  src/31.test.js (121 MB heap size)
 PASS  src/47.test.js (140 MB heap size)
 PASS  src/89.test.js (145 MB heap size)
 PASS  src/7.test.js (151 MB heap size)
 PASS  src/64.test.js (156 MB heap size)
 PASS  src/57.test.js (162 MB heap size)
 PASS  src/77.test.js (167 MB heap size)
 PASS  src/2.test.js (173 MB heap size)
 PASS  src/66.test.js (178 MB heap size)
 PASS  src/18.test.js (144 MB heap size)
 PASS  src/99.test.js (151 MB heap size)
 PASS  src/79.test.js (156 MB heap size)
 PASS  src/86.test.js (161 MB heap size)
 PASS  src/97.test.js (167 MB heap size)
 PASS  src/83.test.js (172 MB heap size)
 PASS  src/74.test.js (178 MB heap size)
 PASS  src/0.test.js (183 MB heap size)
 PASS  src/58.test.js (190 MB heap size)
 PASS  src/17.test.js (195 MB heap size)
 PASS  src/38.test.js (200 MB heap size)
 PASS  src/5.test.js (206 MB heap size)
 PASS  src/51.test.js (211 MB heap size)
 PASS  src/32.test.js (217 MB heap size)
 PASS  src/28.test.js (222 MB heap size)
 PASS  src/14.test.js (228 MB heap size)
 PASS  src/44.test.js (233 MB heap size)
 PASS  src/71.test.js (239 MB heap size)
 PASS  src/37.test.js (146 MB heap size)
 PASS  src/82.test.js (152 MB heap size)
 PASS  src/70.test.js (158 MB heap size)
 PASS  src/54.test.js (163 MB heap size)
 PASS  src/78.test.js (169 MB heap size)
 PASS  src/98.test.js (174 MB heap size)
 PASS  src/10.test.js (180 MB heap size)
 PASS  src/27.test.js (185 MB heap size)
 PASS  src/91.test.js (191 MB heap size)

Test Suites: 100 passed, 100 total
Tests:       100000 passed, 100000 total
Snapshots:   0 total
Time:        80.487 s
```

Running tests using node 16.11

```sh
./test.sh 16.11
```

Results:

```
 PASS  src/14.test.js (41 MB heap size)
 PASS  src/75.test.js (51 MB heap size)
 PASS  src/54.test.js (59 MB heap size)
 PASS  src/44.test.js (68 MB heap size)
 PASS  src/73.test.js (64 MB heap size)
 PASS  src/52.test.js (11.087 s, 72 MB heap size)
 PASS  src/1.test.js (80 MB heap size)
 PASS  src/93.test.js (88 MB heap size)
 PASS  src/30.test.js (71 MB heap size)
 PASS  src/19.test.js (67 MB heap size)
 PASS  src/24.test.js (75 MB heap size)
 PASS  src/9.test.js (83 MB heap size)
 PASS  src/29.test.js (91 MB heap size)
 PASS  src/48.test.js (98 MB heap size)
 PASS  src/92.test.js (92 MB heap size)
 PASS  src/95.test.js (100 MB heap size)
 PASS  src/55.test.js (108 MB heap size)
 PASS  src/40.test.js (115 MB heap size)
 PASS  src/98.test.js (122 MB heap size)
 PASS  src/4.test.js (130 MB heap size)
 PASS  src/7.test.js (105 MB heap size)
 PASS  src/63.test.js (112 MB heap size)
 PASS  src/77.test.js (120 MB heap size)
 PASS  src/35.test.js (127 MB heap size)
 PASS  src/33.test.js (135 MB heap size)
 PASS  src/42.test.js (142 MB heap size)
 PASS  src/81.test.js (150 MB heap size)
 PASS  src/65.test.js (157 MB heap size)
 PASS  src/99.test.js (165 MB heap size)
 PASS  src/66.test.js (172 MB heap size)
 PASS  src/16.test.js (180 MB heap size)
 PASS  src/34.test.js (187 MB heap size)
 PASS  src/25.test.js (194 MB heap size)
 PASS  src/10.test.js (202 MB heap size)
 PASS  src/11.test.js (210 MB heap size)
 PASS  src/17.test.js (217 MB heap size)
 PASS  src/83.test.js (225 MB heap size)
 PASS  src/57.test.js (170 MB heap size)
 PASS  src/45.test.js (166 MB heap size)
 PASS  src/53.test.js (174 MB heap size)
 PASS  src/87.test.js (181 MB heap size)
 PASS  src/49.test.js (189 MB heap size)
 PASS  src/27.test.js (196 MB heap size)
 PASS  src/97.test.js (203 MB heap size)
 PASS  src/41.test.js (211 MB heap size)
 PASS  src/22.test.js (218 MB heap size)
 PASS  src/38.test.js (226 MB heap size)
 PASS  src/23.test.js (233 MB heap size)
 PASS  src/59.test.js (241 MB heap size)
 PASS  src/60.test.js (248 MB heap size)
 PASS  src/88.test.js (256 MB heap size)
 PASS  src/70.test.js (264 MB heap size)
 PASS  src/71.test.js (271 MB heap size)
 PASS  src/80.test.js (279 MB heap size)
 PASS  src/67.test.js (287 MB heap size)
 PASS  src/94.test.js (294 MB heap size)
 PASS  src/47.test.js (301 MB heap size)
 PASS  src/31.test.js (309 MB heap size)
 PASS  src/62.test.js (316 MB heap size)
 PASS  src/61.test.js (324 MB heap size)
 PASS  src/39.test.js (331 MB heap size)
 PASS  src/72.test.js (260 MB heap size)
 PASS  src/5.test.js (267 MB heap size)
 PASS  src/90.test.js (275 MB heap size)
 PASS  src/46.test.js (282 MB heap size)
 PASS  src/85.test.js (290 MB heap size)
 PASS  src/82.test.js (297 MB heap size)
 PASS  src/89.test.js (305 MB heap size)
 PASS  src/58.test.js (312 MB heap size)
 PASS  src/69.test.js (320 MB heap size)
 PASS  src/26.test.js (327 MB heap size)
 PASS  src/18.test.js (334 MB heap size)
 PASS  src/32.test.js (342 MB heap size)
 PASS  src/86.test.js (349 MB heap size)
 PASS  src/28.test.js (357 MB heap size)
 PASS  src/2.test.js (364 MB heap size)
 PASS  src/21.test.js (372 MB heap size)
 PASS  src/6.test.js (380 MB heap size)
 PASS  src/78.test.js (387 MB heap size)
 PASS  src/64.test.js (394 MB heap size)
 PASS  src/13.test.js (402 MB heap size)
 PASS  src/74.test.js (409 MB heap size)
 PASS  src/15.test.js (347 MB heap size)
 PASS  src/20.test.js (355 MB heap size)
 PASS  src/37.test.js (362 MB heap size)
 PASS  src/68.test.js (369 MB heap size)
 PASS  src/50.test.js (377 MB heap size)
 PASS  src/84.test.js (384 MB heap size)
 PASS  src/76.test.js (392 MB heap size)
 PASS  src/43.test.js (399 MB heap size)
 PASS  src/8.test.js (407 MB heap size)
 PASS  src/36.test.js (414 MB heap size)
 PASS  src/12.test.js (421 MB heap size)
 PASS  src/56.test.js (429 MB heap size)
 PASS  src/51.test.js (436 MB heap size)
 PASS  src/0.test.js (443 MB heap size)
 PASS  src/79.test.js (451 MB heap size)
 PASS  src/3.test.js (458 MB heap size)
 PASS  src/96.test.js (409 MB heap size)
 PASS  src/91.test.js (416 MB heap size)

Test Suites: 100 passed, 100 total
Tests:       100000 passed, 100000 total
Snapshots:   0 total
Time:        98.62 s
```