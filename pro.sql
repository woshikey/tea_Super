/*
Navicat MySQL Data Transfer

Source Server         : project
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : pro

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-16 00:46:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL auto_increment,
  `img` varchar(255) collate utf8_unicode_ci default NULL,
  `desc1` varchar(255) collate utf8_unicode_ci default NULL,
  `desc11` varchar(255) collate utf8_unicode_ci default NULL,
  `desc2` varchar(255) collate utf8_unicode_ci default NULL,
  `price` int(11) default NULL,
  `people` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '/images/details/sbimg1.jpg', '醉品朴茶 西湖龙井 核心产区正宗好茶 生态绿罐100g', '醉品朴茶 西湖龙井 核心产区正宗好茶 生态绿罐100g', '香气持久，口感鲜甜', '138', '229');
INSERT INTO `list` VALUES ('2', '/images/list/li2.jpg', '醉品朴茶·醇朴 安溪铁观音 经典口碑款 清香型 NGY0840-250g', '醉品朴茶·醇朴 安溪铁观音 经典口碑款 清香型 NGY0840-250g', '茶农直供 买就省70%', '180', '15962');
INSERT INTO `list` VALUES ('3', '/images/list/li3.jpg', '醉品朴茶 安溪铁观音 口碑好茶 皇冠100g', '醉品朴茶 安溪铁观音 口碑好茶 皇冠100g', '碳焙炒米香，耐冲泡', '89', '273');
INSERT INTO `list` VALUES ('4', '/images/list/li4.jpg', '醉品朴茶 安溪铁观音 GY0800-234g 清香型 一级 月享装', '醉品朴茶 安溪铁观音 GY0800-234g 清香型 一级 月享装', '办公茶月享装', '188', '483');
INSERT INTO `list` VALUES ('5', '/images/list/li5.jpg', '醉品叶界 王清海大师代表作 安溪铁观音  特级 288g 乌龙茶', '醉品叶界 王清海大师代表作 安溪铁观音  特级 288g 乌龙茶', '春茶热卖款，茶王品质之作', '449', '2294');
INSERT INTO `list` VALUES ('6', '/images/list/li6.jpg', '魏荫大师茶 安溪铁观音 2017秋茶 浓香型  一级250g 炭焙奇香', '魏荫大师茶 安溪铁观音 2017秋茶 浓香型  一级250g 炭焙奇香', '魏荫品牌畅销款', '143', '329');
INSERT INTO `list` VALUES ('7', '/images/list/li7.jpg', '醉品朴茶·素朴 安溪铁观音 实惠口粮茶清香型 NGY0456-250g', '醉品朴茶·素朴 安溪铁观音 实惠口粮茶清香型 NGY0456-250g', '【泡袋红白随机发货】7年热销口碑推荐', '99', '6335');
INSERT INTO `list` VALUES ('8', '/images/list/li8.jpg', '浓韵汇大师茶 安溪铁观音  2017年春茶 浓香型 特级125g 单罐', '浓韵汇大师茶 安溪铁观音  2017年春茶 浓香型 特级125g 单罐', '高性价比口粮茶', '50', '326');
INSERT INTO `list` VALUES ('9', '/images/list/li9.jpg', '醉品朴茶 安溪铁观音 知音伴手礼 清香型 125g', '醉品朴茶 安溪铁观音 知音伴手礼 清香型 125g', '纯朴农家茶赠知音好友', '119', '1183');
INSERT INTO `list` VALUES ('10', '/images/list/li10.jpg', '魏荫大师茶 安溪铁观音 2017秋茶 浓香型  一级250g 炭焙奇香', '魏荫大师茶 安溪铁观音 2017秋茶 浓香型  一级250g 炭焙奇香', '魏荫品牌畅销款', '143', '329');

-- ----------------------------
-- Table structure for `menu`
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(255) collate utf8_unicode_ci default NULL,
  `name` varchar(255) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '乌龙茶', '安溪铁观音,武夷岩茶,台湾高山茶,广东单枞');
INSERT INTO `menu` VALUES ('2', '红茶', '金骏眉,正山小种,祁门红茶,云南滇红');
INSERT INTO `menu` VALUES ('3', '绿茶', '龙井,碧螺春,黄山毛峰,六安瓜片');
INSERT INTO `menu` VALUES ('4', '黑茶', '普洱茶,安化黑茶,六堡茶,柑普茶');
INSERT INTO `menu` VALUES ('5', '白茶', '福鼎白茶,其他白茶');
INSERT INTO `menu` VALUES ('6', '花茶', '茉莉花茶,玫瑰花茶,菊花茶,其他花茶');
INSERT INTO `menu` VALUES ('7', '茶具', '陶瓷茶具,紫砂茶具,玻璃茶具,茶盘');

-- ----------------------------
-- Table structure for `menu_pic`
-- ----------------------------
DROP TABLE IF EXISTS `menu_pic`;
CREATE TABLE `menu_pic` (
  `id` int(11) NOT NULL auto_increment,
  `url` varchar(255) collate utf8_unicode_ci default NULL,
  `name` varchar(255) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of menu_pic
-- ----------------------------
INSERT INTO `menu_pic` VALUES ('1', '/images/index/安溪铁观音.jpg,/images/index/广东单从.jpg,/images/index/台湾高山茶.jpg,/images/index/漳平水仙.jpg', '安溪铁观音,广东单从,台湾高山茶,漳平水仙,其他乌龙茶');
INSERT INTO `menu_pic` VALUES ('2', '/images/index/金骏眉.jpg,/images/index/云南滇绿.jpg,/images/index/凌云白毫红茶.jpg,/images/index/英德红茶.jpg', '金骏眉,云南滇绿,凌云白毫红茶,英德红茶');
INSERT INTO `menu_pic` VALUES ('3', '/images/index/云南滇绿.jpg', '云南滇绿');
INSERT INTO `menu_pic` VALUES ('4', '/images/index/安化黑茶.jpg,/images/index/六堡茶.jpg', '安化黑茶,六堡茶');
INSERT INTO `menu_pic` VALUES ('5', '/images/index/安吉白茶.jpg,/images/index/白茶.jpg', '安吉白茶,白茶');
INSERT INTO `menu_pic` VALUES ('6', '/images/index/茉莉花茶.jpg,/images/index/玫瑰花茶.jpg,/images/index/其他花茶.jpg', '茉莉花茶,玫瑰花茶,其他花茶');
INSERT INTO `menu_pic` VALUES ('7', '/images/index/玻璃茶具.jpg,/images/index/茶盘.jpg,/images/index/陶瓷茶具.jpg,/images/index/铁壶.jpg\r\n', '玻璃茶具,茶盘,陶瓷茶具,铁壶');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(255) collate utf8_unicode_ci default NULL,
  `password` varchar(255) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15680831211', '1q1q1q');
