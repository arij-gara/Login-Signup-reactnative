
import { StatusBar } from 'expo-status-bar'
import { Text, View , Image, TextInput, TouchableOpacity} from 'react-native'
import  Animated ,{ FadeIn, FadeOut , FadeInUp , FadeInDown} from 'react-native-reanimated';
import { useNavigation} from "@react-navigation/native"
export default function LoginScreen () { 
  
  const navigation =  useNavigation()
    return (
      <View  className="bg-white h-full w-full pt-5">
        <StatusBar  style="light" />
        <Image className="h-full w-full absolute" source={require("../assets/images/background.png")} />
        

        {/* lights */}
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image  entering={FadeInUp.delay(200).duration(1000).springify()}  className="h-[225]  W-[90]"  source= {  require("../assets/images/light.png")}/>
            <Animated.Image  entering={FadeInUp.delay(400).duration(1000).springify()}  className="h-[160]  W-[65]"  source= {  require("../assets/images/light.png")}/>

        </View>
          
          {/* title and form */}

          <View className="w-full h-full flex justify-around  pt-40 pb-10">
            {/* title */}
            <View className="flex items-center">
             <Animated.Text  entering={FadeInUp.duration(1000).springify()}  className=" text-white font-bold  tracking-wider text-5xl">
                Login
             </Animated.Text>
            </View>
        
          {/* form */}
          <View className="flex items-center  mx-4 space-y-4">
            
            <Animated.View   entering={FadeInDown.duration(1000).springify()}  className="bg-black/5 p-5 rounded-2xl w-full ">
             <TextInput placeholder="email"  placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View  entering={FadeInDown.duration(1000).springify()}  className="bg-black/5 p-5 rounded-2xl w-full mb-3 ">
             <TextInput placeholder="password"  placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>
            <Animated.View  entering={FadeInDown.duration(1000).springify()} className="w-full">
                <TouchableOpacity
                 className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
                >
              <Text  className="text-xl font-bold text-white text-center"> Login</Text>
                </TouchableOpacity>

            </Animated.View>
             <View className="flex-row justify-center">
                <Text> Dont have an account ? </Text>
                <TouchableOpacity onPress={() =>navigation.push('signUp')}>
                  <Text className="text-sky-600">signUp</Text>
                  
                </TouchableOpacity>
             </View>
          </View>
          </View>
      </View>
    )
  
}
