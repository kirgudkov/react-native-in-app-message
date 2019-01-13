#import "Blur.h"

@interface Blur ()

@end


@implementation Blur

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        self.blurEffectView = [[UIVisualEffectView alloc] init];
        self.blurEffectView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
        self.blurEffectView.frame = frame;

        self.blurAmount = @10;
        self.blurType = @"light";
        [self updateBlur];
        self.clipsToBounds = true;
        [self addSubview:self.blurEffectView];
     }

     return self;
}

- (void)layoutSubviews {
  [super layoutSubviews];
  self.blurEffectView.frame = self.bounds;
}

- (void)setBlurType:(NSString *)blurType {
  if (blurType && ![self.blurType isEqual:blurType]) {
    _blurType = blurType;
    [self updateBlur];
  }
}

- (void)setBlurAmount:(NSNumber *)blurAmount {
  if (blurAmount && ![self.blurAmount isEqualToNumber:blurAmount]) {
    _blurAmount = blurAmount;
    [self updateBlur];
  }
}

- (UIBlurEffectStyle)blurEffectStyle {
  if ([self.blurType isEqual: @"xlight"]) return UIBlurEffectStyleExtraLight;
  if ([self.blurType isEqual: @"light"]) return UIBlurEffectStyleLight;
  if ([self.blurType isEqual: @"dark"]) return UIBlurEffectStyleDark;
  return UIBlurEffectStyleLight;
}

- (void)updateBlur {
  UIBlurEffectStyle style = [self blurEffectStyle];
  self.blurEffect = [BlurAmount effectWithStyle:style andBlurAmount:self.blurAmount];
  self.blurEffectView.effect = self.blurEffect;
}

@end
