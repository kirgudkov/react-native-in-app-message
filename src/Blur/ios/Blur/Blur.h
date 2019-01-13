#import <UIKit/UIKit.h>
#import "BlurAmount.h"

@interface Blur : UIView
  @property (nonatomic, strong) NSString *blurType;
  @property (nonatomic, copy) NSNumber *blurAmount;

  @property (nonatomic, strong) BlurAmount *blurEffect;
  @property (nonatomic, strong) UIVisualEffectView *blurEffectView;

  - (void)updateBlur;
@end
