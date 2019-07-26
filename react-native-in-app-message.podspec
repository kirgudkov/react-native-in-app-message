require 'json'
package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|
  s.name           = "react-native-in-app-message"
  s.version        = package["version"]
  s.summary        = package["description"]
  s.homepage       = "https://github.com/KirillGudkov/react-native-in-app-message"
  s.author         = { "Kirill Gudkov" => "for.example.nickname@gmail.com" }
  s.ios.deployment_target = '9.0'
  s.license        = package["license"]
  s.source_files   = "src/RNInAppMessage/ios/RNInAppMessage/**/*.{h,m}"
  s.source         = { :git => "https://github.com/KirillGudkov/react-native-in-app-message.git", :tag => "v#{s.version}" }

  s.dependency 'React'
end