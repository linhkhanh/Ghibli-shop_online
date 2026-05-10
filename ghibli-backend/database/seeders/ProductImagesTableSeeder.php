<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductImagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        DB::table('product_images')->delete();
        
        DB::table('product_images')->insert(array (
            0 => 
            array (
                'id' => 11,
                'product_id' => 6,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp',
                'created_at' => '2026-04-17 14:03:29',
                'updated_at' => '2026-04-17 14:03:29',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 12,
                'product_id' => 6,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/iofcufopzpabjtam11oj.webp',
                'created_at' => '2026-04-17 14:03:29',
                'updated_at' => '2026-04-17 14:03:29',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 26,
                'product_id' => 2,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776143525/ggbklocqwajbqvmpxtkk.webp',
                'created_at' => '2026-04-17 14:43:47',
                'updated_at' => '2026-04-17 14:43:47',
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 27,
                'product_id' => 2,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776143525/asiifglyeemnywt2lxmk.webp',
                'created_at' => '2026-04-17 14:43:47',
                'updated_at' => '2026-04-17 14:43:47',
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 38,
                'product_id' => 7,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776435131/abis4201fsuplfu3ovfa.webp',
                'created_at' => '2026-04-17 22:31:59',
                'updated_at' => '2026-04-17 22:31:59',
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 39,
                'product_id' => 7,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776435132/expmkeq4t494daxac5qj.webp',
                'created_at' => '2026-04-17 22:31:59',
                'updated_at' => '2026-04-17 22:31:59',
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 55,
                'product_id' => 9,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465723/spww6jeoup08wphicrlk.webp',
                'created_at' => '2026-04-17 22:42:04',
                'updated_at' => '2026-04-17 22:42:04',
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 56,
                'product_id' => 9,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465723/avhky4wcwjaaruh2ocg3.webp',
                'created_at' => '2026-04-17 22:42:04',
                'updated_at' => '2026-04-17 22:42:04',
                'deleted_at' => NULL,
            ),
            8 => 
            array (
                'id' => 57,
                'product_id' => 9,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465723/g0mpfat5qg6rlxygzgtm.webp',
                'created_at' => '2026-04-17 22:42:04',
                'updated_at' => '2026-04-17 22:42:04',
                'deleted_at' => NULL,
            ),
            9 => 
            array (
                'id' => 58,
                'product_id' => 10,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465803/tqtghrhzh66hijasgkkf.webp',
                'created_at' => '2026-04-17 22:43:24',
                'updated_at' => '2026-04-17 22:43:24',
                'deleted_at' => NULL,
            ),
            10 => 
            array (
                'id' => 59,
                'product_id' => 10,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465803/cv7dfbeo5tbmocy7ndhs.webp',
                'created_at' => '2026-04-17 22:43:24',
                'updated_at' => '2026-04-17 22:43:24',
                'deleted_at' => NULL,
            ),
            11 => 
            array (
                'id' => 60,
                'product_id' => 10,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465803/iugqspuey0q4salubpo1.webp',
                'created_at' => '2026-04-17 22:43:24',
                'updated_at' => '2026-04-17 22:43:24',
                'deleted_at' => NULL,
            ),
            12 => 
            array (
                'id' => 61,
                'product_id' => 11,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/rypkp2ddw6xfgkidiz5s.webp',
                'created_at' => '2026-04-17 22:44:03',
                'updated_at' => '2026-04-17 22:44:03',
                'deleted_at' => NULL,
            ),
            13 => 
            array (
                'id' => 62,
                'product_id' => 11,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/dwvvftipkwgcdwgkbwsr.webp',
                'created_at' => '2026-04-17 22:44:03',
                'updated_at' => '2026-04-17 22:44:03',
                'deleted_at' => NULL,
            ),
            14 => 
            array (
                'id' => 89,
                'product_id' => 38,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776226159/fyugrirxzmsp3ywrkw2b.jpg',
                'created_at' => '2026-04-17 22:58:41',
                'updated_at' => '2026-04-17 22:58:41',
                'deleted_at' => NULL,
            ),
            15 => 
            array (
                'id' => 116,
                'product_id' => 64,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507070/lirsz18uzsntrvgouatn.webp',
                'created_at' => '2026-04-18 10:11:10',
                'updated_at' => '2026-04-18 10:11:10',
                'deleted_at' => NULL,
            ),
            16 => 
            array (
                'id' => 119,
                'product_id' => 12,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507387/f7qq3otbynziu8mystvo.webp',
                'created_at' => '2026-04-18 10:18:19',
                'updated_at' => '2026-04-18 10:18:19',
                'deleted_at' => NULL,
            ),
            17 => 
            array (
                'id' => 120,
                'product_id' => 12,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507498/fzimcmavlgdxwtwcemkq.webp',
                'created_at' => '2026-04-18 10:18:19',
                'updated_at' => '2026-04-18 10:18:19',
                'deleted_at' => NULL,
            ),
            18 => 
            array (
                'id' => 121,
                'product_id' => 14,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/rypkp2ddw6xfgkidiz5s.webp',
                'created_at' => '2026-04-18 10:32:10',
                'updated_at' => '2026-04-18 10:32:10',
                'deleted_at' => NULL,
            ),
            19 => 
            array (
                'id' => 127,
                'product_id' => 67,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776520851/axx8cxw399hzn37ujcpd.webp',
                'created_at' => '2026-04-18 14:00:52',
                'updated_at' => '2026-04-18 14:00:52',
                'deleted_at' => NULL,
            ),
            20 => 
            array (
                'id' => 128,
                'product_id' => 67,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776520851/qbvsomuivqrtemo97l3s.webp',
                'created_at' => '2026-04-18 14:00:52',
                'updated_at' => '2026-04-18 14:00:52',
                'deleted_at' => NULL,
            ),
            21 => 
            array (
                'id' => 132,
                'product_id' => 34,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776226159/fyugrirxzmsp3ywrkw2b.jpg',
                'created_at' => '2026-04-18 14:28:44',
                'updated_at' => '2026-04-18 14:28:44',
                'deleted_at' => NULL,
            ),
            22 => 
            array (
                'id' => 133,
                'product_id' => 5,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776427031/gjrmolark1ljtrtiwapk.webp',
                'created_at' => '2026-04-19 12:28:50',
                'updated_at' => '2026-04-19 12:28:50',
                'deleted_at' => NULL,
            ),
            23 => 
            array (
                'id' => 134,
                'product_id' => 5,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776427031/ttsavpjvl7cgvbvkfq0m.webp',
                'created_at' => '2026-04-19 12:28:50',
                'updated_at' => '2026-04-19 12:28:50',
                'deleted_at' => NULL,
            ),
            24 => 
            array (
                'id' => 140,
                'product_id' => 62,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776506797/ty4diqznmwa10karbtmh.webp',
                'created_at' => '2026-04-20 05:12:20',
                'updated_at' => '2026-04-20 05:12:20',
                'deleted_at' => NULL,
            ),
            25 => 
            array (
                'id' => 141,
                'product_id' => 62,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776506797/rqa6dkyr8ouhgmv1lxc6.webp',
                'created_at' => '2026-04-20 05:12:20',
                'updated_at' => '2026-04-20 05:12:20',
                'deleted_at' => NULL,
            ),
            26 => 
            array (
                'id' => 142,
                'product_id' => 65,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507112/y5xrejdajr9tpqhkxccm.webp',
                'created_at' => '2026-04-20 05:17:12',
                'updated_at' => '2026-04-20 05:17:12',
                'deleted_at' => NULL,
            ),
            27 => 
            array (
                'id' => 143,
                'product_id' => 17,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/rypkp2ddw6xfgkidiz5s.webp',
                'created_at' => '2026-04-20 05:17:27',
                'updated_at' => '2026-04-20 05:17:27',
                'deleted_at' => NULL,
            ),
            28 => 
            array (
                'id' => 147,
                'product_id' => 32,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000741/ajw3gxurfaoqem6qdgrj.webp',
                'created_at' => '2026-04-24 03:19:01',
                'updated_at' => '2026-04-24 03:19:01',
                'deleted_at' => NULL,
            ),
            29 => 
            array (
                'id' => 148,
                'product_id' => 32,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000741/hhkqrc5ksnwmfyf5vms3.webp',
                'created_at' => '2026-04-24 03:19:01',
                'updated_at' => '2026-04-24 03:19:01',
                'deleted_at' => NULL,
            ),
            30 => 
            array (
                'id' => 149,
                'product_id' => 54,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp',
                'created_at' => '2026-04-24 03:20:04',
                'updated_at' => '2026-05-08 15:20:16',
                'deleted_at' => '2026-05-08 15:20:16',
            ),
            31 => 
            array (
                'id' => 150,
                'product_id' => 54,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000803/idcvpwkhx99oczmxmewz.webp',
                'created_at' => '2026-04-24 03:20:04',
                'updated_at' => '2026-05-08 15:20:16',
                'deleted_at' => '2026-05-08 15:20:16',
            ),
            32 => 
            array (
                'id' => 153,
                'product_id' => 59,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000936/avpujb6syopcgvuxecmo.webp',
                'created_at' => '2026-04-24 03:22:16',
                'updated_at' => '2026-04-24 03:22:16',
                'deleted_at' => NULL,
            ),
            33 => 
            array (
                'id' => 154,
                'product_id' => 59,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000936/ysmm2q5mqgfa3h5s6czp.webp',
                'created_at' => '2026-04-24 03:22:16',
                'updated_at' => '2026-04-24 03:22:16',
                'deleted_at' => NULL,
            ),
            34 => 
            array (
                'id' => 156,
                'product_id' => 13,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001058/hdyhlsihcgcgdwy51gin.webp',
                'created_at' => '2026-04-24 03:24:19',
                'updated_at' => '2026-04-24 03:24:19',
                'deleted_at' => NULL,
            ),
            35 => 
            array (
                'id' => 157,
                'product_id' => 13,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001058/nl6ev5kfzvyzxuefyeom.webp',
                'created_at' => '2026-04-24 03:24:19',
                'updated_at' => '2026-04-24 03:24:19',
                'deleted_at' => NULL,
            ),
            36 => 
            array (
                'id' => 164,
                'product_id' => 42,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001208/bbdxwyy7lkffkrcocczc.webp',
                'created_at' => '2026-04-24 03:26:48',
                'updated_at' => '2026-04-24 03:26:48',
                'deleted_at' => NULL,
            ),
            37 => 
            array (
                'id' => 165,
                'product_id' => 43,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001281/noj1v6e84hpvrxkdmlcl.webp',
                'created_at' => '2026-04-24 03:28:02',
                'updated_at' => '2026-04-24 03:28:02',
                'deleted_at' => NULL,
            ),
            38 => 
            array (
                'id' => 168,
                'product_id' => 63,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507014/i63pj6qavwemsuli9nvw.webp',
                'created_at' => '2026-04-24 03:28:58',
                'updated_at' => '2026-04-24 03:28:58',
                'deleted_at' => NULL,
            ),
            39 => 
            array (
                'id' => 169,
                'product_id' => 63,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001338/ckpozzm7o1d1ad6eq5qe.webp',
                'created_at' => '2026-04-24 03:28:58',
                'updated_at' => '2026-04-24 03:28:58',
                'deleted_at' => NULL,
            ),
            40 => 
            array (
                'id' => 170,
                'product_id' => 63,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001338/cjqatmwyooftwjt5rwok.webp',
                'created_at' => '2026-04-24 03:28:58',
                'updated_at' => '2026-04-24 03:28:58',
                'deleted_at' => NULL,
            ),
            41 => 
            array (
                'id' => 180,
                'product_id' => 37,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001978/pfbtunbxmmjaxpg9q6sa.webp',
                'created_at' => '2026-04-24 03:39:39',
                'updated_at' => '2026-04-24 03:39:39',
                'deleted_at' => NULL,
            ),
            42 => 
            array (
                'id' => 181,
                'product_id' => 41,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002005/yi8nzvzxb7eguwuc7qca.webp',
                'created_at' => '2026-04-24 03:40:06',
                'updated_at' => '2026-04-24 03:40:06',
                'deleted_at' => NULL,
            ),
            43 => 
            array (
                'id' => 182,
                'product_id' => 40,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002072/mwmx8ekdru0azosioa5f.webp',
                'created_at' => '2026-04-24 03:41:13',
                'updated_at' => '2026-04-24 03:41:13',
                'deleted_at' => NULL,
            ),
            44 => 
            array (
                'id' => 183,
                'product_id' => 40,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002073/wpse690nkmvtshmoomte.webp',
                'created_at' => '2026-04-24 03:41:13',
                'updated_at' => '2026-04-24 03:41:13',
                'deleted_at' => NULL,
            ),
            45 => 
            array (
                'id' => 184,
                'product_id' => 15,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002105/akzd2vvdeo9rnhwsy9r2.webp',
                'created_at' => '2026-04-24 03:41:46',
                'updated_at' => '2026-04-24 03:41:46',
                'deleted_at' => NULL,
            ),
            46 => 
            array (
                'id' => 185,
                'product_id' => 18,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002139/xpsxpaqdirgxhcjzlp2b.webp',
                'created_at' => '2026-04-24 03:42:20',
                'updated_at' => '2026-04-24 03:42:20',
                'deleted_at' => NULL,
            ),
            47 => 
            array (
                'id' => 187,
                'product_id' => 35,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002382/xtyukievfxfmq1hky5n2.webp',
                'created_at' => '2026-04-24 03:46:23',
                'updated_at' => '2026-04-24 03:46:23',
                'deleted_at' => NULL,
            ),
            48 => 
            array (
                'id' => 188,
                'product_id' => 36,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002413/cofwx0fgvugf72ybthlh.webp',
                'created_at' => '2026-04-24 03:46:54',
                'updated_at' => '2026-04-24 03:46:54',
                'deleted_at' => NULL,
            ),
            49 => 
            array (
                'id' => 190,
                'product_id' => 29,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002494/vpli0ueeh5qlmimowpv0.webp',
                'created_at' => '2026-04-24 03:48:15',
                'updated_at' => '2026-04-24 03:48:15',
                'deleted_at' => NULL,
            ),
            50 => 
            array (
                'id' => 192,
                'product_id' => 31,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002566/sxbjg9d85atzdulus7ov.webp',
                'created_at' => '2026-04-24 03:49:27',
                'updated_at' => '2026-04-24 03:49:27',
                'deleted_at' => NULL,
            ),
            51 => 
            array (
                'id' => 193,
                'product_id' => 30,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002594/amxtnlt08ezlfvbce9rq.webp',
                'created_at' => '2026-04-24 03:49:54',
                'updated_at' => '2026-04-24 03:49:54',
                'deleted_at' => NULL,
            ),
            52 => 
            array (
                'id' => 194,
                'product_id' => 26,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002632/fgkyyjdp71mudmompsdi.webp',
                'created_at' => '2026-04-24 03:50:33',
                'updated_at' => '2026-04-24 03:50:33',
                'deleted_at' => NULL,
            ),
            53 => 
            array (
                'id' => 195,
                'product_id' => 26,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002632/mbmspt18lgpyyufyogv1.webp',
                'created_at' => '2026-04-24 03:50:33',
                'updated_at' => '2026-04-24 03:50:33',
                'deleted_at' => NULL,
            ),
            54 => 
            array (
                'id' => 196,
                'product_id' => 22,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776424831/ib2brhmsku09rsqygkje.webp',
                'created_at' => '2026-04-24 03:50:53',
                'updated_at' => '2026-04-24 03:50:53',
                'deleted_at' => NULL,
            ),
            55 => 
            array (
                'id' => 197,
                'product_id' => 23,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002711/nqoaabd9yvga0fsdsg6b.webp',
                'created_at' => '2026-04-24 03:51:52',
                'updated_at' => '2026-04-24 03:51:52',
                'deleted_at' => NULL,
            ),
            56 => 
            array (
                'id' => 198,
                'product_id' => 23,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002710/sg8rzuviqs2ruphh3yeh.webp',
                'created_at' => '2026-04-24 03:51:52',
                'updated_at' => '2026-04-24 03:51:52',
                'deleted_at' => NULL,
            ),
            57 => 
            array (
                'id' => 199,
                'product_id' => 20,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002749/oygpd19t3gxnx1cvbedf.webp',
                'created_at' => '2026-04-24 03:52:29',
                'updated_at' => '2026-04-24 03:52:29',
                'deleted_at' => NULL,
            ),
            58 => 
            array (
                'id' => 200,
                'product_id' => 21,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002775/cdx0cxrj3pppjvzj5dkv.webp',
                'created_at' => '2026-04-24 03:52:56',
                'updated_at' => '2026-04-24 03:52:56',
                'deleted_at' => NULL,
            ),
            59 => 
            array (
                'id' => 201,
                'product_id' => 28,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002807/ei3mwudqc5v8v1dst6wg.webp',
                'created_at' => '2026-04-24 03:53:28',
                'updated_at' => '2026-04-24 03:53:28',
                'deleted_at' => NULL,
            ),
            60 => 
            array (
                'id' => 202,
                'product_id' => 39,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002857/wem7o6clhenf49b6l0yk.webp',
                'created_at' => '2026-04-24 03:54:18',
                'updated_at' => '2026-04-24 03:54:18',
                'deleted_at' => NULL,
            ),
            61 => 
            array (
                'id' => 203,
                'product_id' => 24,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002926/lintu2esa78nq1jlipzh.webp',
                'created_at' => '2026-04-24 03:55:26',
                'updated_at' => '2026-04-24 03:55:26',
                'deleted_at' => NULL,
            ),
            62 => 
            array (
                'id' => 204,
                'product_id' => 51,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776219842/ego4f9hvwhsnwa0kvq6j.jpg',
                'created_at' => '2026-04-24 03:55:45',
                'updated_at' => '2026-04-24 03:55:45',
                'deleted_at' => NULL,
            ),
            63 => 
            array (
                'id' => 210,
                'product_id' => 70,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776661678/su8v83678cba6iljtrfc.webp',
                'created_at' => '2026-04-24 12:15:57',
                'updated_at' => '2026-04-24 12:15:57',
                'deleted_at' => NULL,
            ),
            64 => 
            array (
                'id' => 211,
                'product_id' => 69,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776521057/qycolbavzfoid5dfmomz.webp',
                'created_at' => '2026-04-24 12:16:04',
                'updated_at' => '2026-04-24 12:16:04',
                'deleted_at' => NULL,
            ),
            65 => 
            array (
                'id' => 212,
                'product_id' => 69,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776521057/e3gs8nwcm3oknwgdhrdf.webp',
                'created_at' => '2026-04-24 12:16:04',
                'updated_at' => '2026-04-24 12:16:04',
                'deleted_at' => NULL,
            ),
            66 => 
            array (
                'id' => 213,
                'product_id' => 68,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776520963/kp5smvlzl3rr7dahg05v.webp',
                'created_at' => '2026-04-24 12:16:13',
                'updated_at' => '2026-04-24 12:16:13',
                'deleted_at' => NULL,
            ),
            67 => 
            array (
                'id' => 214,
                'product_id' => 57,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001828/ivaplzyjusojgpvlgknn.webp',
                'created_at' => '2026-04-24 12:16:34',
                'updated_at' => '2026-04-24 12:16:34',
                'deleted_at' => NULL,
            ),
            68 => 
            array (
                'id' => 215,
                'product_id' => 58,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000983/ysjasxgjggsvo4v1vyzb.webp',
                'created_at' => '2026-04-24 12:16:51',
                'updated_at' => '2026-04-24 12:16:51',
                'deleted_at' => NULL,
            ),
            69 => 
            array (
                'id' => 216,
                'product_id' => 53,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001104/popcfswgbvvbaixjn67d.webp',
                'created_at' => '2026-04-24 12:16:58',
                'updated_at' => '2026-04-24 12:16:58',
                'deleted_at' => NULL,
            ),
            70 => 
            array (
                'id' => 217,
                'product_id' => 53,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001171/l9htaeptxferagoah4ce.webp',
                'created_at' => '2026-04-24 12:16:58',
                'updated_at' => '2026-04-24 12:16:58',
                'deleted_at' => NULL,
            ),
            71 => 
            array (
                'id' => 218,
                'product_id' => 53,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001171/oz7tybhtynkn3bbr2hqy.webp',
                'created_at' => '2026-04-24 12:16:58',
                'updated_at' => '2026-04-24 12:16:58',
                'deleted_at' => NULL,
            ),
            72 => 
            array (
                'id' => 219,
                'product_id' => 46,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001142/yiluxt1fzxoy9kqmkenq.webp',
                'created_at' => '2026-04-24 12:17:08',
                'updated_at' => '2026-04-24 12:17:08',
                'deleted_at' => NULL,
            ),
            73 => 
            array (
                'id' => 220,
                'product_id' => 45,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001588/iogx5muqkwsvm1d8hqjp.webp',
                'created_at' => '2026-04-24 12:17:15',
                'updated_at' => '2026-04-24 12:17:15',
                'deleted_at' => NULL,
            ),
            74 => 
            array (
                'id' => 221,
                'product_id' => 48,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001918/yov0iqefceqqcidx9ope.webp',
                'created_at' => '2026-04-24 12:17:24',
                'updated_at' => '2026-05-02 13:29:29',
                'deleted_at' => '2026-05-02 13:29:29',
            ),
            75 => 
            array (
                'id' => 222,
                'product_id' => 48,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001918/btdyjbuyou0emio7630w.webp',
                'created_at' => '2026-04-24 12:17:24',
                'updated_at' => '2026-05-02 13:29:29',
                'deleted_at' => '2026-05-02 13:29:29',
            ),
            76 => 
            array (
                'id' => 223,
                'product_id' => 44,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001307/ym1rddxdpsav2guptbhf.webp',
                'created_at' => '2026-04-24 12:17:30',
                'updated_at' => '2026-04-24 12:17:30',
                'deleted_at' => NULL,
            ),
            77 => 
            array (
                'id' => 224,
                'product_id' => 47,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002971/ol2cinocvou9bjclwhkg.webp',
                'created_at' => '2026-04-24 12:17:39',
                'updated_at' => '2026-04-24 12:17:39',
                'deleted_at' => NULL,
            ),
            78 => 
            array (
                'id' => 225,
                'product_id' => 47,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002972/fmdfs8lmyipfejhcbv5z.webp',
                'created_at' => '2026-04-24 12:17:39',
                'updated_at' => '2026-04-24 12:17:39',
                'deleted_at' => NULL,
            ),
            79 => 
            array (
                'id' => 226,
                'product_id' => 50,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001494/ctnq21bbjivh8agcxzuc.jpg',
                'created_at' => '2026-04-24 12:17:48',
                'updated_at' => '2026-04-24 12:17:48',
                'deleted_at' => NULL,
            ),
            80 => 
            array (
                'id' => 227,
                'product_id' => 50,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001494/enqnzcftgbhzl2x9tozd.webp',
                'created_at' => '2026-04-24 12:17:48',
                'updated_at' => '2026-04-24 12:17:48',
                'deleted_at' => NULL,
            ),
            81 => 
            array (
                'id' => 228,
                'product_id' => 49,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001950/o2gyqejr155dqjpw7qxy.webp',
                'created_at' => '2026-04-24 12:18:10',
                'updated_at' => '2026-04-24 12:18:10',
                'deleted_at' => NULL,
            ),
            82 => 
            array (
                'id' => 229,
                'product_id' => 71,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776950961/t1ydrdmoqnfwhfl2iefm.webp',
                'created_at' => '2026-04-29 13:29:49',
                'updated_at' => '2026-04-29 13:29:49',
                'deleted_at' => NULL,
            ),
            83 => 
            array (
                'id' => 230,
                'product_id' => 71,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776950995/ttp41ytxhutvzwyblich.webp',
                'created_at' => '2026-04-29 13:29:49',
                'updated_at' => '2026-04-29 13:29:49',
                'deleted_at' => NULL,
            ),
            84 => 
            array (
                'id' => 231,
                'product_id' => 55,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp',
                'created_at' => '2026-04-30 07:22:29',
                'updated_at' => '2026-05-04 13:08:52',
                'deleted_at' => '2026-05-04 13:08:52',
            ),
            85 => 
            array (
                'id' => 232,
                'product_id' => 33,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776226159/fyugrirxzmsp3ywrkw2b.jpg',
                'created_at' => '2026-04-30 14:40:17',
                'updated_at' => '2026-05-05 04:19:26',
                'deleted_at' => '2026-05-05 04:19:26',
            ),
            86 => 
            array (
                'id' => 233,
                'product_id' => 56,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000871/ifq0ggsufk3pjreqr2mq.webp',
                'created_at' => '2026-04-30 15:14:24',
                'updated_at' => '2026-04-30 15:14:24',
                'deleted_at' => NULL,
            ),
            87 => 
            array (
                'id' => 234,
                'product_id' => 56,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000871/hrpfwblochhv0t7otdij.webp',
                'created_at' => '2026-04-30 15:14:24',
                'updated_at' => '2026-04-30 15:14:24',
                'deleted_at' => NULL,
            ),
            88 => 
            array (
                'id' => 235,
                'product_id' => 19,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002443/jlikqhoaqb98vkgsyv8d.webp',
                'created_at' => '2026-04-30 15:19:20',
                'updated_at' => '2026-04-30 15:19:20',
                'deleted_at' => NULL,
            ),
            89 => 
            array (
                'id' => 236,
                'product_id' => 66,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776516561/mkgvkeznksm5ujhlzzkz.webp',
                'created_at' => '2026-04-30 15:26:29',
                'updated_at' => '2026-04-30 15:26:29',
                'deleted_at' => NULL,
            ),
            90 => 
            array (
                'id' => 237,
                'product_id' => 66,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776516561/ou9nbosaveyc14fheccu.webp',
                'created_at' => '2026-04-30 15:26:29',
                'updated_at' => '2026-04-30 15:26:29',
                'deleted_at' => NULL,
            ),
            91 => 
            array (
                'id' => 238,
                'product_id' => 52,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001848/yw3jvctbm1ppv5m0lnnb.webp',
                'created_at' => '2026-04-30 15:39:22',
                'updated_at' => '2026-04-30 15:39:22',
                'deleted_at' => NULL,
            ),
            92 => 
            array (
                'id' => 239,
                'product_id' => 27,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002529/ppvdquoqkvtjyzfveyho.webp',
                'created_at' => '2026-05-01 02:54:32',
                'updated_at' => '2026-05-01 02:54:32',
                'deleted_at' => NULL,
            ),
            93 => 
            array (
                'id' => 241,
                'product_id' => 25,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777003019/glnndrkymsmqnjqxbnt9.webp',
                'created_at' => '2026-05-02 11:56:25',
                'updated_at' => '2026-05-02 11:56:25',
                'deleted_at' => NULL,
            ),
            94 => 
            array (
                'id' => 242,
                'product_id' => 73,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777727085/svcuxaouiwjz3qawyebb.webp',
                'created_at' => '2026-05-02 13:04:46',
                'updated_at' => '2026-05-02 13:05:29',
                'deleted_at' => '2026-05-02 13:05:29',
            ),
            95 => 
            array (
                'id' => 243,
                'product_id' => 74,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777727206/pebtpam7it1s83j2quvj.webp',
                'created_at' => '2026-05-02 13:06:47',
                'updated_at' => '2026-05-02 13:08:50',
                'deleted_at' => '2026-05-02 13:08:50',
            ),
            96 => 
            array (
                'id' => 244,
                'product_id' => 75,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777728707/w51lmjofr2pb46ybmfpm.avif',
                'created_at' => '2026-05-02 13:31:48',
                'updated_at' => '2026-05-02 13:32:11',
                'deleted_at' => '2026-05-02 13:32:11',
            ),
            97 => 
            array (
                'id' => 245,
                'product_id' => 75,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777728707/w51lmjofr2pb46ybmfpm.avif',
                'created_at' => '2026-05-02 13:32:11',
                'updated_at' => '2026-05-02 14:01:21',
                'deleted_at' => '2026-05-02 14:01:21',
            ),
            98 => 
            array (
                'id' => 246,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp',
                'created_at' => '2026-05-02 13:50:37',
                'updated_at' => '2026-05-02 13:51:27',
                'deleted_at' => '2026-05-02 13:51:27',
            ),
            99 => 
            array (
                'id' => 247,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp',
                'created_at' => '2026-05-02 13:51:27',
                'updated_at' => '2026-05-02 14:08:43',
                'deleted_at' => '2026-05-02 14:08:43',
            ),
            100 => 
            array (
                'id' => 248,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729886/tqm6qx14ol0eyolbmdz9.webp',
                'created_at' => '2026-05-02 13:51:27',
                'updated_at' => '2026-05-02 14:08:43',
                'deleted_at' => '2026-05-02 14:08:43',
            ),
            101 => 
            array (
                'id' => 249,
                'product_id' => 75,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777728707/w51lmjofr2pb46ybmfpm.avif',
                'created_at' => '2026-05-02 14:01:21',
                'updated_at' => '2026-05-02 14:01:21',
                'deleted_at' => NULL,
            ),
            102 => 
            array (
                'id' => 250,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp',
                'created_at' => '2026-05-02 14:08:43',
                'updated_at' => '2026-05-04 14:10:30',
                'deleted_at' => '2026-05-04 14:10:30',
            ),
            103 => 
            array (
                'id' => 251,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729886/tqm6qx14ol0eyolbmdz9.webp',
                'created_at' => '2026-05-02 14:08:43',
                'updated_at' => '2026-05-04 14:10:30',
                'deleted_at' => '2026-05-04 14:10:30',
            ),
            104 => 
            array (
                'id' => 252,
                'product_id' => 77,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900061/orovqvrwm3s8jxan8m4k.webp',
                'created_at' => '2026-05-04 13:07:42',
                'updated_at' => '2026-05-04 13:07:42',
                'deleted_at' => NULL,
            ),
            105 => 
            array (
                'id' => 253,
                'product_id' => 77,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900062/knsrdtwprehuid21ba6z.webp',
                'created_at' => '2026-05-04 13:07:42',
                'updated_at' => '2026-05-04 13:07:42',
                'deleted_at' => NULL,
            ),
            106 => 
            array (
                'id' => 254,
                'product_id' => 55,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp',
                'created_at' => '2026-05-04 13:08:52',
                'updated_at' => '2026-05-04 13:12:47',
                'deleted_at' => '2026-05-04 13:12:47',
            ),
            107 => 
            array (
                'id' => 255,
                'product_id' => 55,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900366/tsolamsu4amhnktjhkip.webp',
                'created_at' => '2026-05-04 13:12:47',
                'updated_at' => '2026-05-04 13:12:47',
                'deleted_at' => NULL,
            ),
            108 => 
            array (
                'id' => 256,
                'product_id' => 55,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900366/r44d56gjbyiihx6ezypf.webp',
                'created_at' => '2026-05-04 13:12:47',
                'updated_at' => '2026-05-04 13:12:47',
                'deleted_at' => NULL,
            ),
            109 => 
            array (
                'id' => 257,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp',
                'created_at' => '2026-05-04 14:10:30',
                'updated_at' => '2026-05-04 14:10:30',
                'deleted_at' => NULL,
            ),
            110 => 
            array (
                'id' => 258,
                'product_id' => 76,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729886/tqm6qx14ol0eyolbmdz9.webp',
                'created_at' => '2026-05-04 14:10:30',
                'updated_at' => '2026-05-04 14:10:30',
                'deleted_at' => NULL,
            ),
            111 => 
            array (
                'id' => 259,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/yqidxxvoqeagzfwdeldr.webp',
                'created_at' => '2026-05-05 04:20:42',
                'updated_at' => '2026-05-08 15:15:05',
                'deleted_at' => '2026-05-08 15:15:05',
            ),
            112 => 
            array (
                'id' => 260,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/p2p12tuxkechflser04n.webp',
                'created_at' => '2026-05-05 04:20:43',
                'updated_at' => '2026-05-08 15:15:05',
                'deleted_at' => '2026-05-08 15:15:05',
            ),
            113 => 
            array (
                'id' => 261,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/yqidxxvoqeagzfwdeldr.webp',
                'created_at' => '2026-05-08 15:15:05',
                'updated_at' => '2026-05-08 15:17:31',
                'deleted_at' => '2026-05-08 15:17:31',
            ),
            114 => 
            array (
                'id' => 262,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/p2p12tuxkechflser04n.webp',
                'created_at' => '2026-05-08 15:15:05',
                'updated_at' => '2026-05-08 15:17:31',
                'deleted_at' => '2026-05-08 15:17:31',
            ),
            115 => 
            array (
                'id' => 263,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/yqidxxvoqeagzfwdeldr.webp',
                'created_at' => '2026-05-08 15:17:31',
                'updated_at' => '2026-05-08 15:18:54',
                'deleted_at' => '2026-05-08 15:18:54',
            ),
            116 => 
            array (
                'id' => 264,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/p2p12tuxkechflser04n.webp',
                'created_at' => '2026-05-08 15:17:31',
                'updated_at' => '2026-05-08 15:18:54',
                'deleted_at' => '2026-05-08 15:18:54',
            ),
            117 => 
            array (
                'id' => 265,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/yqidxxvoqeagzfwdeldr.webp',
                'created_at' => '2026-05-08 15:18:55',
                'updated_at' => '2026-05-08 15:18:55',
                'deleted_at' => NULL,
            ),
            118 => 
            array (
                'id' => 266,
                'product_id' => 78,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/p2p12tuxkechflser04n.webp',
                'created_at' => '2026-05-08 15:18:55',
                'updated_at' => '2026-05-08 15:18:55',
                'deleted_at' => NULL,
            ),
            119 => 
            array (
                'id' => 267,
                'product_id' => 54,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp',
                'created_at' => '2026-05-08 15:20:16',
                'updated_at' => '2026-05-08 15:20:16',
                'deleted_at' => NULL,
            ),
            120 => 
            array (
                'id' => 268,
                'product_id' => 54,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000803/idcvpwkhx99oczmxmewz.webp',
                'created_at' => '2026-05-08 15:20:16',
                'updated_at' => '2026-05-08 15:20:16',
                'deleted_at' => NULL,
            ),
            121 => 
            array (
                'id' => 269,
                'product_id' => 79,
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1778413724/a4tfei4ukoifppvtid3t.webp',
                'created_at' => '2026-05-10 11:48:45',
                'updated_at' => '2026-05-10 11:48:45',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}