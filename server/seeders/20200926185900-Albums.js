'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      {
      "id":1,
      "artist_id":1,
      "name":"AM",
      "album_img":"https://upload.wikimedia.org/wikipedia/he/thumb/0/04/Arctic_Monkeys_-_AM.png/250px-Arctic_Monkeys_-_AM.png"
      },
      {
      "id":2,
      "artist_id":2,
      "name":"Legends Never Die",
      "album_img":"https://wp.dailybruin.com/images/2020/07/web.ae_.juicewrld.courtesy-1024x1018.jpg"
      },
      {
      "id":3,
      "artist_id":3,
      "name":"Dont Smile At Me",
      "album_img":"https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Billie_Eilish_-_Don%27t_Smile_at_Me.png/220px-Billie_Eilish_-_Don%27t_Smile_at_Me.png"
      },
      {
      "id":4,
      "artist_id":4,
      "name":"24K Magic",
      "album_img":"https://upload.wikimedia.org/wikipedia/he/9/93/Bruno_Mars_24cover.png"
      },
      {
      "id":5,
      "artist_id":5,
      "name":"Exident",
      "album_img":"https://upload.wikimedia.org/wikipedia/he/a/a9/Exident.jpg"
      },
      {
      "id":6,
      "artist_id":6,
      "name":"Views",
      "album_img":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUVFRUVFRUVFRUSFRUVFRUXFhUVFRUYHSggGBolGxYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFQ8QFy0dHR0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0rLS0rLS0tLSstLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEYQAAEDAQQECwUFBwMEAwAAAAEAAhEDBBIhMQVBUWEGEyIyUnGBkaGx0RVCYpLBFFOC4fAWI0NyorLSM2OTJKPC8TREc//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQEAAgEEAwEAAAAAAAAAABEBEiECAxNBUTEyYSL/2gAMAwEAAhEDEQA/AOalPKgfWAicAXNbOyTEwBKt2llNsXKl/byHMjvzXWuQA5OHKK8nlVHW6KbNJnV9Vzenqf8A1DyZyGR13Qum0Qf3LOpcxphp4+qcRJG/3RqXn8f2138v1xz2kWjk7ZdieyFm0W+a09KN5uZ53dgs+zujbmu+fhx1MzZ6I349nUhaeVMGFKHAknAYZGZmNglEdDoWn/0hxmazTs9w4DeodMsHFGAR1k+is6L/APijX+/G2D+7GIy2oNOsHEmBE3ce1c/l0+GBZrrZBAIbTe4kAXjDSc3SNezUFTtVAN5W0VOuAHNx1HKVp2OyuDzfPJuuBa6Abt3UCROxZ2ljlnHFyBs4xs4bM9e9dGG3opznMpxxt8BsEFhN00xlJgzBwOIEHeugsDCOcMbzzM3gDeIwOZOqSAsWjQFMNLHBovNGZm86JGJgTjIjHDYtyg92uIvPy23zq1ILZeo3PQFybV2+X/tEFfU1LFQNYZw9Por1OnCBmNUoYjaxT06SKrsbirtNienQUhpEYhQSU6YQ1mgqVmCZ4UVnPpQq7gtGs2clAaCqKrQVLTf1qR1FBxZCC3RcdSuU8c1n0iQp+NKKtmmBrSaWjWqTnOOZQgKDQ4walFUrKuKaMUd6AKtoO3wUBrKyaIURpBUeY2wEgAZ32RqxvjM6lftdkdTi8WY6mva84bbpMIrVoujUF13GROpzRzcdbCnFmp4AB+MDnt1ieglJiqCkHKdtBmGDsY94awfh3JMpsAGByGbtrSdm5Wo6qxVblnY6JhgJExhrx6lzulX3q1Q4wYImRqGSGtbKhutBFxrS0NxEAtuk3gZmCUNauXEuMTrOOqRt3LnnhubW9883piW6lOvmhxxOeIENnM6461m0wSAZiZ/ucunfQaTJEx254HwVd1kaMYnqAEYbAIXTGGKxhnPwClp2RxJvPIwIiPhInBpWsbI3MfTao+JxzOPVjqOpBrUdED7JScTUN+ofec1vJa1gN0HMwcdyq6T0MwNGqS1suc+MTmZOSkGkKppsp3+Qyboutw15xJTV6zqguuiNzWtyyyG5Yzx1rfLHN1hccAJcJJxnEHATjKoaQtDnOqExrgYiACAB3ALrPspwh7hgBmYgTGR3lQ1dCtfMuOPV6LbFTWq1C+ID+cyIY4jANgkjAHMLaoVZn8R3xeIy2quHHogHAZzl3LGk0uOfdfN6XXS3AX21L0EfztzyJQuOlUci84tEuaweMmJ7ELasgEGAQDJGU59eqFn2u3mmCGMGRBdzoBc484H4pxxmVR0zaBvRd1HLE6lpUrLiZ3fVY2j7fx1djQW3g28XNF4AAtbBJOBN7w6l1tKkQ50kmQ3OMM9gU0UWWbcrNGzxmrooojSWa0iFMIrgUlyMVTr2nYgJ7QM1Wc+VC+0E61EaionJTXlBfTSiJ3OUbggBRgoCaVNTKr30rxRVg1gkHqpKNrwEE5qoXVVDxoUZeiJ+OKG+q5eg4xBzM8o9fmwqJhxb+D6hE12v/wDM+MIActwH9LvzQC3V+DzITNGX4P8AyCR+vlUSOB6iPCoR9UAO/XcUj+vFOf13lCf14KoIn6/+SX/ryQnX+tRT6/1tRQkeJnxUPopSfIeSh2/rYmJox9PRSt/Xiom/rvUjPoqiZqmYoG/rxUzUE4VWtYC41YdAqMDYiYInlZ78tyshSgqAbJTLWNa4gkNAkCAYwmJMKWEwKdAVBt1zXtJa5uRBjMgkEaxLW9y6LR2mXueG1AOUQLwN0DOJBnqzXPsWpodo4xs7/IqLjrGvCm4wKq1C6tCjSw8kgjaFztoJBIWxVtEBYlZ0lXAF5K8onJwERJeT3lDfCYvQT30/GKpeSvoLd9LjFU4xMaiC0aqY1FUNRCaiC2XIC5VjVQmqgsF6C+qxqpuMQcl7dZ91WyA5rNTp6WxAdOt+6qZO1M1mektL2TZYBFSu685zWAMpg1I1sBPN+I4RimOi7GA4mpXIDhTBHFm+/WKYjlEHDvyhc+Xl9PTw9L7Zb9NzP7p+vW3WQdu0IX6bMn9y7M+80ZuDvp4rTfouyjjJdVHFsDnm/TutccmF1zOMTG6JlE3RVlvNbFaXC/i9gLaYGL3i5yccANeuMVeXl9Jw9L71iv04/VR76g9FG7TtT7ofNP0W8NF2Y+7UnAwamJBE4Q0Y54fCUD9F2b7snX/qPxAzjHMbFbqbnpf1gHT1ToN8UB4QVOi3x37963jomz66YienU5pycOV1qv7Ho9DpDnP5zRPSyyWqxvH4ZB09U6LfHZG1Iabf0W+KvVdEUtQIwaRyjrzzO1Qv0I3U45uGMHISqz0ibp1w9wd5Rt4QH7sfN+ShfoV0SHA4TrHqoaui6jZ5JMGMOVv1Kp002cIxrpnscD9FYp8JKetjx8p+q5q4kGon+XXU+ENGcS4fhP0Vqnpugf4g7Zb5riIRAJFni9BpW2m7mvaeogqdr15zc3KzQrPbzXOHU4gdyhx/r0Sm5auhz+8Hb5Fee2LStce8HbnD6tj6rrODelL9VrHtLHkOIxlrgBjddrjYYKJx3HcX1VrOKHj4QVKsqAKtXBU3PU1RwVOqVQnPQOeo3OUbqiAy9DxirvqKM1EFs1ExqqpxqE1UFs1EJqKoaqE1UFw1U19UzVQmqgulyEuVPjU3HILRchvqtxqXGoKdV+L7z8RDa1Rsy2cW2azgY5RJGOO3KMB5LIaG1HAtoszZZqbecTqNSNX0lGXb4EF2Zp8g5uvHGjTOM1D+8qGYgQmccIMQGCQRxQ4rUajR/o0NlMct/va1mtIw4Xb4aX0mEupMxLq9Wcazz0A7GThr2KK2vuAsqFzr12paXsEktjksZOAZqnZ1qxUqc7Kboc7jBdDWjmvrtHNYPcoDrOJMKc5wyqONX3dlotO13Qo5DDsoOhW4wh+o4xj70PAGwguqHsCT3a5xznHOYa4YazgVUsNQBkSeSS3HMNpm6CcBDm8k/wApUj3bcM5GyTFQdjiHDrRDMtMkhwgNLgIki4cxuIJBRCt1yIJwObTB8FTJN9145gcnYJNN5+aCp7MJmdd0Hrc1zT4tCoVY6usYg9KR5hSFu/3nnXraNyr2pxOOGJZ/W1v1CtPyJ/nP/bb6ohmMwAkZMHcJKNpg4EHYcOcQJ7jeG+E1cYGMwXR1w1g8SmYdcAElxgGQHE3AJ14lxQNXsTH5hpxABkTdGOYxklZtfQDrrnMdMAEMOLnFzogEYYDMmPTXjZqyH8vJY3tdJ7EnnIQYAPK2y4h+E5ktAGWZhSkcsbBWH8Kp8jvRHZtH1ajgxrHFxmAeQMM5LoA7VvV2E64PwktgjUCNQ17SoLRaKtKmXCo83i0NMugNGLnY4B0lg6iVqsxh1KZa4tdm0lpEg4gwcQk1W2aWra3z/M1jvMK9Y9MGmDUDaQqAtawim1jhM33S2DkAPxKihScWnHDcRC7XgrbGOwIF9olvbg6N65WtpRlRxfVohzjm5tSo0nVkSR4Kaz2miDLDXpOGRBp1AD2gIV6PxyY1ljWXSLXUw69JwbJwvOyGUwSfNPQtVRznB1O6ABBDw+ewYhZVpvqqtUqKmy3sc4ta9pcMS0HEDeETnoDfUUD6iB71GXIpy9ASmKa8gKCmhDfQmogMpiozUQmogMlASgL0JeoDLkJeoy5CXIqUvTX1FKUoML7ZUh15lQm+NdWG1crzgRLquUAkAQMFYqWt8VDxFcXSy8Sah4uoY/e1CYmqZETAGGBWhxIGt+GI/e1s4aZ5+9OKDcGwYDpAv1YvFzhei/zt+eJQZle0OaXjiKzbrQ6HOebjjjx9XEXqhzBw6iq7rXUY4i7VgRVu1hfN4gAVX5ScRHYtY2OnBJbM8oy6oZIbeky7EzOJT1bBSc6XMDjObi5xzu5k7IQjIspqvl4bUdeI5TDdyBYBExjddJ1lT1LS8fw6sZ4uBkXTOYPuEdy0qdmY0Q0XRsBIGremdZmnMfrH8+9Bz1a1OL+UDIvCCQCHEBpk6sQO5XbPa6oBcGyOdz6ZAxa7GTO3X5FaP2CnM3RMzOuc5nbKapYmHOT1nerUZlvr1LvKYW5NkOBAhx1A5y2J+HeprLbKl26GuPJBxLTgWtE5zq8lO6wMIiJGBgnD9Y+Klo2VoiJF2SIJETnGxAT9IGDep1BiZIDTEvcTBn4T8qo0dIubUcBJbfc4NLCC0XiQIEwAStelSjJzsc8c8Z88UDNGUw6+C4OJJmczMmUREzSrYAuvGUcicbsNG/G+exQWzSoaWFokXcbwLTLS8MIvYYNczLCRqWkbIHZuJ1ZN19m9DW0U14a0vfDbwaMDF6J/tb3BFqq3SFEtIvY4QDOQOAdgZHvEzuxQ2u0s4tovXpc8ECDAkkPg+8QY2clvUr9DRQa27N4QRyhJExJBGIMNAw1I3aKlrmuuOvay3EG8SSCNZwHYoOWtVMAy3I7NRULTh2rojwcd7rhiDhiNUBKlweqXXh2JLeQWuvQ4EHEGAQRI7QdWOqzHO34UzDEK1W0PaRnSkfgPkZVR9mqiQ6i8R8Lx44hWkamiLddqAnFo1bzhPWAT3ldJWrCo8MacBD3EbPdaDvOJ3DeuBp2gNwxHc70WlYtKuY24CMSZJlroJF6CcJgQmmOmtOkIM4Ecxs3sYIvuvDlNaMhGtSWWoC3kkubnLnXjJJlswJAEQdcrI0PSbnxsE8kNDjzYBDRezgzlvhbbWACAIWVwiVG5EQhuooCUDipriY01BAShJVjikuJQVihKsmihNNBXhMQrIolFxKCkWprivcSlxO5FVG00dwKxxSXFIjjjwkd92MfiOwDZuSdwkfP+m3PpHbe2LCTlZrpMbP7RPiLjco17I8kv2iqzzWf1bQdu5YyQSkxtDTtXYzud/luUXt6t8Hyn1WcxyFWkaXt2t8Py/ml7crfD3fms1JCY0vbVX4e4+qcaaqbG9x9VmJ0pMa7NP1B7rfH1Uo4R1Og3vKxFI9kAZY7MVakxtN4SO+7HzEfRTN4T7af9X5LnQnCJuY6hvClmum7sLT9VYpcKqRza8dgPkVyATszVZjt6XCazn3iOtrvoFfoafs5/isHWbvmvOS3FFSEnFCPUWW+m6LtRp6nAobTbSwiG3gQcRqXmlZmPZrzhNTtD2817m9TnDyKRI9FqW6jUhtSmDeiA5odnET3obTwasz/dLT8JgfLl4LjmaTrtA/eOP8112Ix94ErQs3C6s3nsY7GMJYe/HyQXrRwMIDjRq46muAAOOIcRqjcm0K21Mq8TVY6IxJxaBBhzXDDMARvGAWhZOFdEkNeHMJjMXhj1Y+C6SyObVbLSHDMEGQoMviCjbZlpGkmLUVnmzJnUYV8lR4a0FDikuKV+6ETaYQURZ5UlOyLQbSRCnuQUfswTfZgtIU9ykbSGxBk/ZRsRfYlsMswVmnZApRzpse5N9j3Lo6llGpQ8QEo8oGhKHQ/qf0i3pdSEaGoxzP6n9EnpbQqx4QD7s/MOkHbE3t//AGz83Xu3p032t+xaHQ2+9U+H4thT+xaHQ/qf8XxbQqPt/wD29XS3AbNyX7QH7vX0t5Ozeidr/sej0B8z/wDJL2TR6A8VnHT7ugPmPom9vP6A7yh20joqj0B+go3aHpbP1h6qgdOv6LfFL22/ot8VSasu0Wzopm6Mpn3fE+qq+2X9Fvik3S7uiO8qpNXhoins8T6qRuhaR1HPaVRGm3dAfN+Skbp49D+r8kTtb9gU9/enHBxhyc4d3ooWcIdrD3/kpmcJGj3Hd4RLpHgwNTz2whHBZ2YqDtb+ass4S0tbXjsHqrFPhHQ1kj8J+iF1l1ODNXU5p7wq54P1x7rT1H1hdIzTlnP8QDrkeYVmnpKi7Kqw/iahXGP0XXH8I9kHyKrus7m5scNstcPML0SnVaciD1YontB1IV51XfPZv7vqhYJiN2PevQaujqT+cxp6wFVdwZpYlksMEYGRiIyKDk7JSdxgnPVO3IYda9T0DZQxoIw5IB3xAbPY3xXH2bg6+i6ZDxeBvZEAA5jXiQZ3LvLJAYIyyHZh9FNVI8qJwRuKjKqALEJoqWUQCghFFFxSlARQgiYxTAJAogUDBika1CSU2KKmDwE/2hVXFDeSC2ayGSq3GRrQ/aCkHjfsStsb87dw1dY70/sSt8Hzde7cVrO0hnyHYzrbru/4ohbznxZznnDpF2zfCjd1i+xKvwfMd27eE/sWrtZ3u2kdHcVrm2mI4vVHOHRA2bpQut7p/wBPX0viJ2byhdZPsWrtb3u/xSGhqvw959FrfbH9Adrj6JG1v6DfmPohdZXsar8PefRL2PV+HvPotT7TU2M7z6JC1v6Le87epVLrJ9l1N3efRONFVPh7z6LYFWp0W/MfRODU6LPmP+KJdY/sqpu7z6Jeyquwd622vqdFvzH0UjatToD5vyQ7c+dFVuh4t9Ux0bW6B8PVdILQ8Z0+5wKTdIauLd2FvqqnbmTYao/hu7AT5KM2d/Qd8rvRdiy2/wC2/uB8iphbWa2v+Rx8glRwhwzRNXd/bKJGJjraR5hNxdmfnxTuu6UqOFGGWCs0rdVblUePxHyXXO0HZne6OwkeSgqcGKJ5pcOoz/cCqMehp6u33w7+ZoPlC17NwlcOewHXLTHgfVVq3Bcjmv7CPqFWfoms2ZbOHumfOE6HZWDS9OoQJg5Q4QZ2A5E9RW5o8RTA3u/vcuH0M0F8OGZxBGrkDEFdrowRSaJmJxOfOKkM1O4oVJcQlsIpgnlJoTwgcIpCFCVBJeCV8KIBHggRqITUTkBDggEvUbnqUsBS4gbUFdzkF5TVLKdsqLilR5M+u8RJzxGUEbQip2vCC6NjpB7CBq3jxVBtWOSRLTq2HaDqP6MpiBOGI7j2hZdFt1pcMC4jtCTbZ0jgdesbx6KveEQctW0fkoXdSC+20HEXsYwz1YnwBQfa3Rzjgdp/WxV2uywQbUFy01nQ0yYI6vJRi0mczq1lBUdLANYKip5oLbbU4e87vKkbbHY8o9+9VZRXlWVsW93SKf2i/pHwVL9ZIXBBov0m/K8ct2asPtFyATjEntWXZhywTqxT2h95xO0+AyQa9LSThrHaFZp6Xdsb4hc7dCdwjGUhXUN0yej3O/JSN0tTPOpnua76rk2PO0oxanDWpCundbrKDymx+CP7VbZxBye5mEjluGe52C5mxgRxtTENMMb0n5x1DMqbjr2OsnFIOro2Z+bK0jVeaD5QpRxozY14+Ewe4x5rjxVLcQSOox5KWjp2uHANcXDY7ldxz8U7JjrGVqbiARddOF4XTPwnX2La0e+Kbe3+4rA0dbW2hpa5smBIGIxnI9ma3LMy4xrSZIEEnEk7SVc1NyLraiMlUrylY9VE4YnmEBqqF9RQWDUTcYqhemL0FkvQlyrX03GKixeTX1AaqE1UFnjETaqpGqm41BoishNQLPNZDx6DhTwMtv3Q/wCSn6of2Kt33Q/5GeqSS8/ua9HDCPAu3fcj/kp+qb9jbd9x/wByl/kkknuacMAeCFuH/wBc/PTPk5Rv4L20Z2d/YC7ylMkr7mnBXq6Hrt51NzR8TXN8woRYX7B3/kkku3j3lcfLdzYL7A/YO/8AJSDR9TYO/wDJJJaicjjR9TYO/wDJN7PqbPFJJIUQsNTU3xCH7LVHunwP1SSSJTGk/Ww/LKFwOtvgQkkoUGHV3+qJlOcJwlJJRpNaHXiNTW4AbBry2pjVI2JJKoF1QnAGeryC6zQHBi80PqkgH3RgSNWOpvVierNJKGups1kZTbdY0NG7XvJ1lG5JJVkMo2vSSQIvQlySSADUTGokkgA1EJqJJIAL0JekkgAvQF6SSATUTcYkkqr/2Q=="
      },
      {
      "id":7,
      "artist_id":7,
      "name":"Hagole",
      "album_img":"https://www.disccenter.co.il/content/products/prodimage_32931.jpeg"
      },
      {
      "id":8,
      "artist_id":8,
      "name":"Shemisheu Yatzor Oti",
      "album_img":"https://upload.wikimedia.org/wikipedia/he/e/ed/Prodimage_51534.jpg"
      },
      {
      "id":9,
      "artist_id":9,
      "name":"Manic",
      "album_img":"data:image/jpeg;base64,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"
      },
      {
      "id":10,
      "artist_id":10,
      "name":"Helek Meazman",
      "album_img":"https://upload.wikimedia.org/wikipedia/he/c/ca/IdanAmedi_ChelekMehazman.jpg"
      },
      {
      "id":11,
      "artist_id":11,
      "name":"Mimamakim",
      "album_img":"https://upload.wikimedia.org/wikipedia/he/f/f6/%D7%9E%D7%9E%D7%A2%D7%9E%D7%A7%D7%99%D7%9D.jpg"
      },
      {
      "id":12,
      "artist_id":12,
      "name":"A / B",
      "album_img":"https://www.disccenter.co.il/content/products/prodimage_31921.jpg"
      },
      {
      "id":13,
      "artist_id":13,
      "name":"Suncity",
      "album_img":"https://images.genius.com/48ca10fe4ca2ae201fa0b0437c13d72c.1000x1000x1.jpg"
      },
      {
      "id":14,
      "artist_id":14,
      "name":"Rotze Karov",
      "album_img":"https://is2-ssl.mzstatic.com/image/thumb/Features123/v4/6a/05/55/6a05557d-4549-a717-5d41-c8112293a30b/mzl.rclkthka.jpg/800x800bb.jpeg"
      },
      {
      "id":15,
      "artist_id":15,
      "name":"V",
      "album_img":"https://www.helicon.co.il/wp-content/uploads/2016/11/0602537957934-600x600.jpg"
      },
      {
      "id":16,
      "artist_id":16,
      "name":"Mind The Moon",
      "album_img":"https://images-na.ssl-images-amazon.com/images/I/81PkXkiSVML._SX466_.jpg"
      },
      {
      "id":17,
      "artist_id":17,
      "name":"Holywood's Bleeding",
      "album_img":"https://upload.wikimedia.org/wikipedia/en/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png"
      },
      {
      "id":18,
      "artist_id":18,
      "name":"Californication",
      "album_img":"data:image/jpeg;base64,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"
      },
      {
      "id":19,
      "artist_id":19,
      "name":"ASTROWORLD",
      "album_img":"https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg"
      },
      {
      "id":20,
      "artist_id":20,
      "name":"Starboy",
      "album_img":"https://www.beatnik.co.il/wp-content/uploads/2018/08/WEEKEND-STARBOY.jpg"
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};