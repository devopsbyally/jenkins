FROM amazonlinux:2  # Use Amazon Linux 2 as the base image

# Install dependencies and AWS CLI v2
RUN yum update -y && \
    yum install -y unzip curl && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf awscliv2.zip aws && \
    yum clean all && \
    rm -rf /var/cache/yum && \
    aws --version  # Verify installation

# Create Jenkins user and set working directory
RUN useradd -m jenkins && \
    mkdir -p /home/jenkins && \
    chown jenkins:jenkins /home/jenkins

# Switch to Jenkins user and set working directory
USER jenkins
WORKDIR /home/jenkins

# Default command (optional)
CMD ["/bin/bash"]