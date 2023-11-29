import { useEffect, useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView
} from "react-native";
import SearchBar from "../../components/SearchBar";
import Banner from "../../components/Banner";
import HorizontalSelector from "../../components/HorizontalSelector";
import PagerView from "react-native-pager-view";
import { HomeStyles } from "../../styles";
import Header from "../../components/Header";

export const Home = ({ navigation }) => {

  const [firstBanner, setFirstBanner] = useState({ title: 'First Banner', data: [] });
  const [secondBanner, setSecondBanner] = useState({ title: 'Second Banner', data: [] });
  const [thirdBanner, setThirdBanner] = useState({ title: 'Third Banner', data: [] });
  const [viewPager, setViewPager] = useState(<></>);
  const ref = useRef(PagerView);

  useEffect(() => {
    initializeBanners()
    setFirstBanner({
      title: 'Featured franchises',
      data: [
        {
          title: 'Spider-Man 2',
          price: 69.99,
          image: 'https://image.api.playstation.com/pr/bam-art/164/594/e58db4b4-0e28-49a2-9fc0-06142b636bc1.jpg?w=440&thumb=false'
        },
        {
          title: 'Resident Evil 4',
          price: 49.99,
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png?w=440&thumb=false'
        },
        {
          title: 'Minecraft',
          price: 29.99,
          image: 'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png?w=440&thumb=false'
        },
        {
          title: 'Resident Evil 2',
          price: 29.99,
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0204/uDFoGvnMTTCLVmTwjj0njGWC.png?w=440&thumb=false'
        },
        {
          title: 'Resident Evil 3',
          price: 24.99,
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0206/WmriZBRlSeXWEEDLJOWW7MdW.png?w=440&thumb=false'
        }
      ]
    });

    setSecondBanner({
      title: 'Best narrative',
      data: [
        {
          title: 'Life is Strange',
          price: 19.99,
          image: 'https://image.api.playstation.com/cdn/UP0082/CUSA01442_00/QHRbFpnFoWaPuNOuKrulhmshvbbMAv0v.png?w=440&thumb=false'
        },
        {
          title: 'Life is Strange: Before the Storm',
          price: 29.99,
          image: 'https://image.api.playstation.com/cdn/UP0082/CUSA08479_00/X5nEVc4Ey9FzYI7fI6TVMo9RxOj8dcFJ.png?w=440&thumb=false'
        },
        {
          title: 'Life is Strange 2 - Complete Season',
          price: 29.99,
          image: 'https://image.api.playstation.com/vulcan/img/cfn/11307sP-uYDm-1CmuLpZ9Ihhph3cKJZT1GQhpGB9GiZT-M_QvF0ab_bWziMGUNxjfkAlimQXYXdrzmr_bSmttkb9nvwSlx4-.png?w=440&thumb=false',
          deal: 9.99
        },
        {
          title: 'Captain Spirit',
          price: 0,
          image: 'https://image.api.playstation.com/cdn/UP0082/CUSA09377_00/ODxZEpsajDrY1pdgKdazFKIpB8knaiXx.png?w=440&thumb=false'
        },
        {
          title: 'Life is Strange Remastered Collection',
          price: 59.99,
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202105/1412/bJYCCmymxvgviuuolfOx8srg.png?w=440&thumb=false'
        },
        {
          title: 'Life is Strange: True Colors',
          price: 69.99,
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202103/1012/MrFkXNqIim5naTegtJuGDTEb.png?w=440&thumb=false',
          deal: 39.99
        }
      ]
    });
  }, [navigation]);

  const initializeBanners = () => {
    const imageData = [];
    imageData.push(
      <View style={HomeStyles.externalContainer}>
        <Banner key="banner_1" style={HomeStyles.banner} data={{image: 'https://img.youtube.com/vi/7RPSBeRIP6Y/maxresdefault.jpg'}} />
      </View>
    );
    imageData.push(
      <View style={HomeStyles.externalContainer}>
        <Banner key="banner_2" style={HomeStyles.banner} data={{image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f'}} />
      </View>
    );
    imageData.push(
      <View style={HomeStyles.externalContainer}>
        <Banner key="banner_3" style={HomeStyles.banner} data={{image: 'https://www.lavanguardia.com/andro4all/hero/2023/11/lifeisstrange.jpg?width=1200'}} />
      </View>
    );
    setViewPager(imageData);
  }

  return (
    <SafeAreaView>
      <StatusBar animated={true}/>
      
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 70, width: '100%'}}></View>  
        <SearchBar style={{marginVertical: 10, paddingVertical: 3}} />

        <View>
          <PagerView style={{ flex: 1, width: '100%', height: 250 }} initialPage={0}>
            {viewPager}
          </PagerView>
        </View>

        <HorizontalSelector style={{marginVertical: 10}} title={firstBanner.title} products={firstBanner.data} navigation={navigation}/>
        <HorizontalSelector style={{marginVertical: 10}} title={secondBanner.title} products={secondBanner.data} navigation={navigation}/>
        <HorizontalSelector style={{marginVertical: 10}} title={thirdBanner.title} products={thirdBanner.data} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};