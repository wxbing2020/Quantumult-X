/******************************

脚本功能：卡片日记+解锁订阅
下载地址：https://is.gd/CXisVr
软件版本：10.2.0
脚本作者：彭于晏💞
更新时间：2022-10-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kprj.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/


var _0x44da=['\x66\x4d\x4f\x67\x53\x32\x63\x47\x77\x70\x38\x35\x77\x72\x49\x68','\x5a\x6e\x41\x62\x77\x6f\x6e\x44\x70\x31\x7a\x43\x73\x73\x4f\x64\x4d\x4d\x4b\x52','\x45\x42\x48\x44\x6d\x73\x4f\x67\x77\x70\x76\x43\x75\x54\x44\x44\x6d\x78\x54\x44\x71\x42\x37\x44\x6d\x46\x73\x3d','\x51\x73\x4b\x6c\x4e\x38\x4b\x55\x77\x35\x6f\x50\x77\x72\x64\x63\x77\x37\x37\x44\x6d\x73\x4f\x46\x4c\x52\x58\x43\x74\x77\x2f\x43\x71\x55\x66\x44\x69\x6e\x37\x44\x72\x63\x4f\x78\x77\x36\x45\x7a\x4a\x67\x76\x43\x76\x6b\x44\x44\x72\x4d\x4f\x52\x77\x34\x4c\x43\x6d\x4d\x4f\x2b\x77\x35\x54\x43\x68\x73\x4f\x43\x77\x36\x55\x53\x77\x71\x67\x52','\x61\x73\x4f\x41\x51\x46\x45\x76\x77\x72\x42\x45\x77\x70\x34\x4c\x77\x36\x2f\x44\x6b\x52\x48\x44\x76\x73\x4f\x46\x77\x6f\x2f\x44\x69\x63\x4b\x78\x77\x6f\x4e\x57\x64\x45\x73\x2b\x77\x35\x49\x57\x77\x72\x6b\x3d','\x61\x41\x38\x39\x58\x63\x4b\x43','\x45\x42\x48\x44\x6d\x73\x4f\x67\x77\x70\x76\x43\x75\x54\x44\x44\x6d\x78\x54\x44\x71\x52\x37\x44\x6d\x46\x73\x3d','\x4d\x73\x4f\x69\x77\x6f\x30\x51\x4a\x68\x52\x53\x77\x34\x33\x43\x73\x73\x4f\x64\x77\x34\x74\x64\x42\x38\x4b\x35\x77\x34\x48\x44\x68\x73\x4f\x63\x51\x4d\x4b\x53\x49\x7a\x50\x43\x75\x31\x78\x32\x4e\x63\x4b\x79\x52\x41\x3d\x3d','\x54\x73\x4b\x4f\x77\x72\x35\x36\x4f\x4d\x4b\x33\x77\x70\x38\x6e\x77\x35\x5a\x70\x77\x71\x30\x37\x77\x37\x31\x35\x77\x35\x30\x3d','\x77\x37\x4e\x49\x44\x77\x70\x62\x55\x38\x4f\x30\x55\x56\x33\x43\x6b\x4d\x4b\x31\x4b\x63\x4f\x56\x77\x72\x46\x42\x49\x6c\x6c\x44\x50\x4d\x4f\x7a\x77\x71\x74\x76\x4c\x38\x4b\x35\x54\x55\x37\x43\x71\x51\x3d\x3d','\x77\x35\x48\x44\x69\x63\x4f\x6b\x77\x37\x6f\x45\x4a\x63\x4f\x77\x77\x71\x42\x62\x61\x6b\x52\x32\x51\x67\x6f\x4a\x77\x72\x6a\x43\x67\x73\x4b\x4a\x77\x36\x37\x43\x74\x63\x4f\x73\x77\x71\x51\x7a\x77\x6f\x34\x68\x66\x38\x4f\x43','\x42\x52\x30\x5a\x49\x63\x4b\x44\x77\x35\x41\x77\x4d\x51\x6a\x44\x69\x38\x4b\x72\x55\x69\x35\x33\x77\x36\x4d\x3d','\x42\x38\x4f\x47\x77\x71\x68\x45\x77\x35\x66\x43\x70\x6a\x56\x72\x4f\x4d\x4f\x36\x5a\x38\x4b\x72\x77\x71\x64\x51\x52\x38\x4f\x6d\x5a\x45\x49\x71\x77\x70\x62\x43\x72\x63\x4f\x6a\x57\x69\x33\x44\x6c\x38\x4f\x77\x41\x51\x3d\x3d','\x77\x71\x63\x56\x62\x4d\x4f\x39\x77\x36\x41\x3d','\x41\x6a\x46\x45\x77\x35\x33\x43\x6f\x67\x37\x44\x74\x4d\x4b\x41\x62\x4d\x4f\x4c\x43\x44\x6a\x44\x71\x52\x44\x44\x70\x41\x3d\x3d','\x4c\x4d\x4f\x55\x77\x72\x67\x46\x77\x6f\x33\x43\x6f\x63\x4b\x33\x77\x37\x66\x43\x6c\x30\x76\x44\x6d\x38\x4b\x61\x77\x35\x4c\x43\x71\x56\x4c\x43\x6d\x48\x50\x44\x70\x63\x4b\x31\x52\x38\x4b\x56\x4f\x47\x30\x32\x77\x6f\x6e\x44\x6c\x73\x4f\x57\x45\x4d\x4f\x33\x4a\x63\x4f\x66\x77\x6f\x58\x43\x67\x46\x50\x44\x76\x38\x4b\x49\x77\x36\x6e\x43\x6b\x7a\x45\x3d','\x66\x4d\x4b\x4c\x77\x36\x35\x4f','\x77\x71\x49\x49\x77\x37\x6e\x43\x73\x73\x4f\x49\x58\x63\x4f\x5a\x4d\x38\x4f\x30\x77\x36\x48\x44\x6c\x63\x4b\x39\x77\x70\x41\x45\x77\x37\x4c\x43\x70\x38\x4f\x35\x77\x6f\x33\x43\x68\x73\x4b\x4d\x77\x72\x38\x71\x59\x38\x4f\x53\x4e\x38\x4b\x67\x4c\x57\x76\x43\x70\x30\x6e\x43\x6d\x73\x4f\x30\x4b\x43\x4c\x43\x76\x47\x2f\x44\x70\x38\x4b\x79\x55\x51\x3d\x3d','\x4f\x73\x4b\x37\x77\x37\x72\x43\x6d\x67\x3d\x3d','\x77\x72\x66\x43\x6a\x4d\x4f\x67\x77\x71\x74\x62\x64\x78\x34\x71\x77\x36\x30\x46\x63\x30\x67\x4c\x66\x53\x30\x3d','\x48\x63\x4b\x61\x77\x36\x77\x63\x4b\x38\x4f\x4b\x63\x63\x4f\x6f\x4a\x38\x4f\x43\x77\x71\x48\x44\x67\x38\x4f\x38','\x77\x6f\x63\x4e\x62\x30\x59\x58\x44\x4d\x4f\x71\x46\x51\x4c\x44\x6a\x38\x4f\x52\x63\x4d\x4b\x41\x77\x37\x6b\x4d\x4e\x54\x6f\x56\x62\x38\x4b\x68\x77\x71\x77\x31\x48\x4d\x4f\x6b\x5a\x51\x3d\x3d','\x77\x35\x50\x43\x74\x38\x4f\x47\x59\x6b\x31\x2b\x48\x38\x4b\x7a\x51\x6e\x44\x44\x6e\x63\x4f\x33\x77\x71\x77\x53\x50\x51\x3d\x3d','\x63\x45\x62\x43\x6a\x73\x4f\x5a\x50\x46\x6f\x30\x61\x63\x4b\x36\x59\x33\x63\x39\x63\x41\x3d\x3d','\x57\x73\x4f\x48\x52\x69\x52\x45\x45\x44\x4e\x47\x65\x6b\x76\x44\x68\x57\x62\x44\x6f\x69\x33\x44\x68\x6d\x64\x52\x77\x36\x34\x51\x5a\x73\x4f\x73\x77\x71\x77\x76\x56\x73\x4b\x71','\x77\x72\x66\x43\x67\x33\x41\x4d\x77\x37\x58\x43\x67\x4d\x4f\x4d\x77\x37\x31\x52\x77\x34\x76\x43\x6e\x6d\x44\x44\x69\x51\x3d\x3d','\x43\x30\x58\x43\x69\x4d\x4f\x51\x77\x37\x58\x43\x6e\x6b\x4c\x43\x6b\x73\x4b\x74','\x45\x78\x66\x44\x6e\x73\x4f\x6e\x77\x6f\x4c\x43\x76\x6a\x50\x44\x67\x52\x4c\x44\x71\x77\x37\x44\x6d\x6c\x72\x43\x6c\x73\x4f\x46\x77\x70\x56\x6e\x77\x36\x39\x78\x5a\x73\x4f\x73\x77\x37\x77\x2f\x58\x63\x4f\x58\x77\x36\x45\x31\x77\x34\x66\x43\x6d\x68\x67\x67\x4d\x7a\x67\x79\x77\x35\x6a\x44\x74\x73\x4f\x56\x77\x37\x33\x43\x6b\x67\x3d\x3d','\x51\x63\x4b\x45\x77\x36\x38\x54','\x77\x6f\x58\x44\x6c\x53\x50\x44\x73\x4d\x4b\x67\x46\x45\x78\x37\x65\x57\x7a\x44\x6a\x6b\x59\x76\x4e\x69\x41\x3d','\x77\x34\x4a\x57\x59\x57\x67\x31\x77\x6f\x44\x43\x67\x7a\x4d\x6e\x77\x70\x66\x44\x76\x48\x45\x75\x64\x41\x5a\x76\x42\x32\x50\x43\x72\x63\x4b\x33\x42\x4d\x4f\x71\x54\x73\x4f\x5a\x77\x37\x6a\x43\x6e\x63\x4f\x55\x58\x4d\x4f\x58\x62\x7a\x72\x43\x69\x63\x4b\x73\x4d\x38\x4f\x73\x66\x38\x4b\x4e\x48\x4d\x4b\x35','\x77\x37\x4e\x49\x42\x41\x46\x62\x55\x38\x4f\x30\x55\x56\x33\x43\x6c\x4d\x4b\x31\x4b\x38\x4f\x51\x77\x72\x46\x42\x49\x6c\x6c\x44\x50\x4d\x4f\x7a\x77\x71\x39\x32\x4b\x63\x4f\x6b\x59\x32\x44\x43\x6e\x48\x44\x44\x76\x45\x56\x4a\x47\x63\x4b\x31\x4a\x69\x54\x44\x68\x52\x2f\x44\x69\x38\x4f\x75','\x77\x6f\x54\x44\x71\x38\x4b\x62\x49\x68\x51\x69\x54\x77\x3d\x3d','\x42\x44\x70\x30\x77\x72\x6a\x43\x6e\x53\x49\x74\x51\x32\x68\x64\x77\x72\x51\x4c\x4b\x38\x4b\x49\x4c\x4d\x4f\x42\x77\x37\x30\x45\x5a\x38\x4b\x77\x5a\x45\x6e\x44\x71\x48\x6a\x43\x76\x63\x4f\x6f\x54\x67\x3d\x3d','\x56\x38\x4f\x4f\x4d\x38\x4b\x73\x77\x36\x50\x44\x6a\x58\x2f\x43\x69\x78\x4d\x3d','\x4c\x33\x58\x43\x71\x63\x4f\x6e','\x54\x63\x4f\x46\x61\x55\x67\x33','\x65\x30\x6f\x74\x77\x36\x6a\x44\x75\x77\x3d\x3d','\x50\x38\x4f\x6d\x77\x35\x63\x75\x4d\x6e\x6c\x38\x56\x73\x4f\x30\x47\x73\x4b\x2f\x51\x6a\x38\x34\x62\x54\x74\x4e\x77\x70\x42\x5a\x77\x35\x31\x6a\x58\x4d\x4b\x63\x77\x35\x72\x44\x6a\x67\x3d\x3d','\x50\x4d\x4f\x53\x77\x34\x56\x47\x77\x6f\x41\x79\x63\x73\x4f\x56\x77\x35\x50\x43\x71\x46\x64\x72\x77\x6f\x67\x38\x77\x35\x33\x43\x71\x73\x4b\x55\x61\x55\x37\x44\x6a\x6c\x6c\x65\x50\x69\x51\x3d','\x77\x71\x45\x39\x77\x37\x63\x3d','\x77\x6f\x58\x44\x6c\x53\x50\x44\x73\x4d\x4b\x67\x46\x55\x74\x33\x63\x6d\x76\x44\x69\x55\x4d\x71\x4d\x53\x51\x3d','\x77\x6f\x50\x44\x6c\x69\x48\x44\x73\x73\x4b\x39\x46\x55\x6c\x75\x63\x47\x7a\x44\x6e\x55\x41\x74\x50\x79\x4c\x44\x71\x73\x4f\x55\x45\x73\x4f\x65\x77\x72\x51\x78\x77\x71\x4e\x74\x49\x48\x67\x68\x53\x73\x4b\x49\x50\x4d\x4f\x75\x66\x63\x4b\x47\x77\x34\x44\x43\x67\x63\x4f\x48\x77\x36\x4a\x6f\x77\x71\x44\x44\x76\x51\x3d\x3d','\x77\x70\x62\x44\x70\x6b\x42\x36\x58\x38\x4f\x49\x59\x43\x44\x44\x6a\x6d\x68\x44\x77\x70\x7a\x44\x74\x63\x4f\x65\x4c\x63\x4b\x6b\x65\x63\x4b\x49\x77\x72\x39\x71\x77\x71\x50\x43\x6f\x63\x4f\x67\x77\x36\x76\x44\x72\x73\x4f\x42\x77\x37\x6b\x72\x77\x36\x35\x42\x77\x72\x6e\x43\x71\x55\x6f\x43\x49\x63\x4f\x36\x4e\x53\x54\x43\x6b\x73\x4b\x42\x77\x35\x62\x43\x67\x77\x59\x30\x77\x34\x50\x44\x75\x73\x4f\x42\x52\x32\x7a\x44\x68\x73\x4b\x4a\x77\x70\x48\x43\x70\x43\x66\x44\x6b\x7a\x4e\x6e\x4f\x48\x7a\x44\x74\x6b\x62\x44\x6f\x46\x4e\x73\x77\x34\x67\x57\x4a\x51\x4d\x4e\x58\x73\x4b\x2f\x77\x72\x54\x43\x69\x57\x42\x6a\x42\x38\x4b\x54\x57\x55\x77\x52\x77\x34\x62\x43\x6a\x68\x66\x44\x73\x67\x48\x43\x76\x48\x77\x34\x61\x38\x4b\x4a\x77\x36\x39\x68\x77\x71\x5a\x54\x77\x34\x72\x44\x6d\x30\x6c\x6c\x64\x6d\x58\x44\x6a\x33\x68\x75\x4e\x79\x48\x43\x6f\x4d\x4f\x53\x4c\x63\x4f\x7a\x77\x36\x41\x31\x77\x35\x58\x44\x72\x47\x7a\x44\x6e\x4d\x4b\x38\x56\x63\x4b\x41\x54\x51\x4a\x73\x46\x43\x74\x52\x4f\x63\x4b\x6a\x77\x70\x42\x73\x5a\x38\x4f\x31\x77\x35\x2f\x43\x67\x4d\x4f\x4b\x77\x34\x59\x79\x77\x6f\x4a\x52\x56\x51\x52\x52\x57\x78\x31\x6a\x77\x37\x54\x44\x70\x4d\x4f\x46\x77\x71\x70\x42\x77\x36\x31\x2f\x43\x30\x48\x44\x67\x38\x4b\x2f\x48\x6d\x49\x6e\x77\x6f\x70\x52\x56\x68\x34\x59\x77\x72\x50\x43\x72\x38\x4b\x4c\x77\x70\x72\x44\x69\x63\x4f\x71\x4b\x58\x6b\x73\x43\x53\x64\x70\x77\x34\x34\x7a\x77\x34\x39\x77\x77\x35\x6c\x47\x4b\x4d\x4b\x53\x77\x36\x48\x43\x74\x38\x4b\x5a\x77\x34\x33\x44\x72\x63\x4b\x46\x57\x4d\x4f\x30\x77\x71\x38\x30\x52\x58\x54\x43\x6c\x55\x31\x46\x52\x38\x4f\x7a\x77\x36\x74\x44\x77\x34\x4e\x65\x44\x4d\x4f\x75\x55\x38\x4b\x59\x66\x38\x4b\x4c\x43\x38\x4b\x55\x54\x63\x4b\x2b\x61\x43\x78\x6e\x45\x42\x58\x43\x70\x4d\x4b\x49\x77\x37\x48\x43\x69\x30\x6a\x43\x75\x55\x68\x55\x50\x69\x6c\x50\x4b\x6b\x66\x44\x6f\x46\x34\x2b\x77\x35\x54\x43\x6e\x52\x4e\x46\x77\x6f\x78\x75\x4f\x38\x4f\x37\x77\x71\x33\x44\x69\x73\x4b\x69\x53\x79\x2f\x43\x72\x63\x4f\x4c\x44\x4d\x4f\x67\x44\x77\x6b\x2b\x77\x72\x37\x43\x68\x48\x48\x43\x6b\x67\x49\x2b\x77\x36\x6a\x44\x68\x63\x4b\x6b\x4d\x4d\x4f\x6b\x4f\x42\x66\x44\x67\x73\x4b\x36\x52\x77\x4c\x44\x6f\x33\x62\x43\x68\x42\x2f\x43\x74\x30\x76\x44\x70\x42\x76\x44\x69\x73\x4f\x64\x77\x34\x50\x44\x67\x6e\x72\x43\x6d\x4d\x4f\x45\x4a\x58\x66\x43\x75\x6a\x62\x44\x74\x38\x4f\x78\x44\x4d\x4b\x72\x50\x73\x4f\x4e\x77\x72\x46\x35\x4c\x41\x62\x43\x69\x55\x6e\x43\x6b\x73\x4f\x39\x4a\x47\x63\x32\x77\x36\x77\x63\x77\x37\x72\x43\x76\x6b\x37\x43\x76\x69\x38\x68\x51\x32\x59\x39\x77\x36\x4e\x39\x4a\x63\x4f\x44\x4e\x38\x4b\x6d\x42\x38\x4b\x4d\x57\x54\x58\x44\x70\x63\x4b\x51\x49\x69\x48\x44\x67\x42\x67\x45\x62\x73\x4f\x36\x4d\x38\x4f\x6d\x77\x34\x4a\x65\x41\x7a\x48\x43\x67\x56\x68\x67\x45\x7a\x42\x32\x45\x43\x58\x44\x71\x
