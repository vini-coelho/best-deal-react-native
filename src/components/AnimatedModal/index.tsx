import React, { useEffect, useState, ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Animated, {
  useSharedValue,
  Easing,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
  interpolateColor,
} from 'react-native-reanimated';

interface Props {
  visible?: boolean;
  children: ReactNode;
}

export function AnimatedModal({
  children,
  visible = false,
}: Props) {
  const [modalVisible, setModalVisible] = useState(visible);
  const modalAnimation = useSharedValue(0);

  const modalBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(modalAnimation.value,
        [0, 100],
        ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
        "RGB",
      )
    }
  })

  const modalContentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(modalAnimation.value,
            [0, 100],
            [300, 0],
          )
        }
      ]
    }
  })

  function closeModal() {
    setModalVisible(false)
  }

  function handleOpenModal() {
    setModalVisible(true);
    modalAnimation.value = withTiming(100, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
  }

  function handleCloseModal() {
    modalAnimation.value = withTiming(0, {
      duration: 200,
    }, () => {
      'worklet'
      runOnJS(closeModal)();
    });
  }

  useEffect(() => {
    if (modalVisible === visible) return;

    if(!modalVisible) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }

    return () => {
      handleCloseModal()
    }
  }, [visible]);

  if(!modalVisible) {
    return null;
  }

  return (
    <Animated.View style={[
      modalBackgroundStyle,
      {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        zIndex: 200
      }
    ]}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior='height'
      >
        <Animated.View style={[
          modalContentStyle,
          {
            zIndex: 300,
            width: '100%',
            height: '100%'
          }
        ]}>
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Animated.View>
  );
}
